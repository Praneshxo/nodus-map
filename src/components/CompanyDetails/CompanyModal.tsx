"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, MapPin, Users, Heart, Bookmark, Plus, Check } from "lucide-react";
import { Company } from "../../types/company";
import styles from "./CompanyModal.module.css";
import { supabase } from "../../utils/supabase";
import { useState, useCallback } from "react";



interface CompanyModalProps {
    company: Company | null;
    onClose: () => void;
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showCollectionMenu, setShowCollectionMenu] = useState(false);
    const [collections, setCollections] = useState<{ id: string, name: string }[]>([]);
    const [savedCollectionIds, setSavedCollectionIds] = useState<string[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [newColName, setNewColName] = useState("");

    const fetchCollectionsAndStatus = useCallback(async () => {
        if (!company) return;
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Fetch all user collections
        const { data: cols } = await supabase.from('collections').select('id, name').eq('user_id', user.id);
        if (cols) {
            // Deduplicate by name (preferring earliest created or first found)
            const uniqueCols: { id: string, name: string }[] = [];
            const seenNames = new Set<string>();
            for (const col of cols) {
                if (!seenNames.has(col.name)) {
                    uniqueCols.push(col);
                    seenNames.add(col.name);
                }
            }
            setCollections(uniqueCols);

            // Check which collections this company is in
            const { data: items } = await supabase.from('collection_items').select('collection_id').eq('company_id', company.id);
            if (items) {
                const ids = items.map(i => i.collection_id);
                setSavedCollectionIds(ids);

                // Identify Favorites collection
                const favCol = cols.find(c => c.name === 'Favorites');
                if (favCol && ids.includes(favCol.id)) setIsFavorite(true);
                else setIsFavorite(false);
            }
        }
    }, [company]);

    useEffect(() => {
        if (company && modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { scale: 0.9, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
            );
            fetchCollectionsAndStatus();
        }
    }, [company, fetchCollectionsAndStatus]);

    const handleClose = () => {
        if (modalRef.current) {
            gsap.to(modalRef.current, {
                scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: "power2.in",
                onComplete: onClose
            });
        } else {
            onClose();
        }
    };

    const toggleCollection = async (collectionId: string) => {
        if (!company || isSaving) return;

        const wasSaved = savedCollectionIds.includes(collectionId);
        // Optimistic update
        setSavedCollectionIds(prev =>
            wasSaved ? prev.filter(id => id !== collectionId) : [...prev, collectionId]
        );

        setIsSaving(true);
        try {
            if (wasSaved) {
                await supabase
                    .from('collection_items')
                    .delete()
                    .eq('collection_id', collectionId)
                    .eq('company_id', company.id);
            } else {
                await supabase
                    .from('collection_items')
                    .insert({ collection_id: collectionId, company_id: company.id });
            }
        } catch (error) {
            console.error(error);
            // Rollback
            setSavedCollectionIds(prev =>
                wasSaved ? [...prev, collectionId] : prev.filter(id => id !== collectionId)
            );
        } finally {
            setIsSaving(false);
            fetchCollectionsAndStatus();
        }
    };

    const toggleFavorite = async () => {
        if (!company || isSaving) return;

        const oldFavorite = isFavorite;
        setIsFavorite(!oldFavorite); // Optimistic Update

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        setIsSaving(true);
        try {
            let favCol = collections.find(c => c.name === 'Favorites');

            // If not in state, check DB directly to avoid duplicates
            if (!favCol) {
                const { data: existing } = await supabase
                    .from('collections')
                    .select('id, name')
                    .eq('user_id', user.id)
                    .eq('name', 'Favorites')
                    .maybeSingle();

                if (existing) {
                    favCol = existing;
                } else {
                    const { data: created } = await supabase
                        .from('collections')
                        .insert({ name: 'Favorites', user_id: user.id })
                        .select()
                        .single();
                    favCol = created || undefined;
                }
            }

            if (favCol) {
                if (oldFavorite) {
                    await supabase.from('collection_items').delete().eq('collection_id', favCol.id).eq('company_id', company.id);
                } else {
                    await supabase.from('collection_items').insert({ collection_id: favCol.id, company_id: company.id });
                }
            }
        } catch (error) {
            console.error(error);
            setIsFavorite(oldFavorite); // Rollback
        } finally {
            setIsSaving(false);
            fetchCollectionsAndStatus();
        }
    };

    const handleCreateNewCollection = async () => {
        if (!newColName.trim() || !company) return;

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data: collection } = await supabase
            .from('collections')
            .insert({ name: newColName.trim(), user_id: user.id })
            .select()
            .single();

        if (collection) {
            const newCol = { id: collection.id, name: collection.name };
            setCollections(prev => [...prev, newCol]);
            await toggleCollection(collection.id);
            setNewColName("");
            setIsCreating(false);
        }
    };

    if (!company) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalCard} ref={modalRef}>
                <div className={styles.topRightActions}>
                    <button className={styles.smallIconButton} onClick={handleClose}>
                        <X size={18} />
                    </button>
                    <button
                        className={`${styles.smallIconButton} ${isFavorite ? styles.favoriteActive : ''}`}
                        onClick={toggleFavorite}
                        title="Favorite"
                    >
                        <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
                    </button>
                    <button
                        className={`${styles.smallIconButton} ${savedCollectionIds.filter(id => {
                            const col = collections.find(c => c.id === id);
                            return col && col.name !== 'Favorites';
                        }).length > 0 ? styles.savedActive : ''}`}
                        onClick={() => setShowCollectionMenu(true)}
                        title="Save"
                    >
                        <Bookmark size={16} fill={savedCollectionIds.filter(id => {
                            const col = collections.find(c => c.id === id);
                            return col && col.name !== 'Favorites';
                        }).length > 0 ? "currentColor" : "none"} />
                    </button>
                </div>

                <div className={styles.header}>
                    <div className={styles.logoContainer} style={{ backgroundImage: `url(${company.logoUrl})`, backgroundSize: 'cover' }}></div>
                    <h2 className={styles.companyName}>{company.name}</h2>
                </div>

                <p className={styles.description}>{company.description}</p>

                <div className={styles.infoSection}>
                    <div className={styles.infoRow}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={18} />
                        </div>
                        <div className={styles.infoText}>
                            <span className={styles.infoLabel}>HEADQUARTERS</span>
                            <span className={styles.infoValue}>{company.headquarters}</span>
                        </div>
                    </div>

                    <div className={styles.infoRow}>
                        <div className={styles.iconWrapper}>
                            <Users size={18} />
                        </div>
                        <div className={styles.infoText}>
                            <span className={styles.infoLabel}>TEAM SIZE</span>
                            <span className={styles.infoValue}>{company.teamSize}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>
                    {company.website && (
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                            Visit Website
                        </a>
                    )}
                    {company.linkedin && (
                        <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>

            {showCollectionMenu && (
                <div className={styles.centeredDialogOverlay} onClick={() => setShowCollectionMenu(false)}>
                    <div className={styles.mobilePhoneMockup} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.mockupHandle}></div>

                        <div className={styles.mockupHeader}>
                            <div className={styles.mockupHeaderContent}>
                                <div className={styles.mockupMainItem}>
                                    <div className={styles.mockupItemImage} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
                                    <div className={styles.mockupItemText}>
                                        <div className={styles.mockupItemTitle}>Saved</div>
                                        <div className={styles.mockupItemSub}>Private</div>
                                    </div>
                                </div>
                                <Bookmark size={24} fill="white" color="white" />
                            </div>
                        </div>

                        <div className={styles.mockupListSection}>
                            <div className={styles.mockupListHeader}>
                                <h2>Collections</h2>
                                <button className={styles.mockupNewBtn} onClick={() => setIsCreating(true)}>New collection</button>
                            </div>

                            {isCreating && (
                                <div className={styles.newColInputRow}>
                                    <input
                                        type="text"
                                        placeholder="Name your collection..."
                                        value={newColName}
                                        onChange={(e) => setNewColName(e.target.value)}
                                        autoFocus
                                    />
                                    <button onClick={handleCreateNewCollection} disabled={!newColName.trim()}>
                                        <Check size={18} />
                                    </button>
                                    <button onClick={() => setIsCreating(false)}>
                                        <X size={18} />
                                    </button>
                                </div>
                            )}

                            <div className={styles.mockupList}>
                                {collections.map((c, i) => {
                                    const gradients = [
                                        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
                                        'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
                                        'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
                                        'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
                                    ];
                                    const bg = gradients[i % gradients.length];
                                    const isSaved = savedCollectionIds.includes(c.id);

                                    return (
                                        <div key={c.id} className={styles.mockupListItem}>
                                            <div className={styles.mockupItemMain}>
                                                <div className={styles.mockupItemImage} style={{ background: bg }}></div>
                                                <div className={styles.mockupItemText}>
                                                    <div className={styles.mockupItemTitle}>{c.name}</div>
                                                    <div className={styles.mockupItemSub}>Private</div>
                                                </div>
                                            </div>
                                            <button
                                                className={`${styles.mockupActionBtn} ${isSaved ? styles.itemSaved : ''}`}
                                                onClick={() => toggleCollection(c.id)}
                                                disabled={isSaving}
                                            >
                                                {isSaved ? <Plus size={20} className={styles.rotateIcon} /> : <Plus size={20} />}
                                            </button>
                                        </div>
                                    );
                                })}
                                {collections.length === 0 && !isCreating && (
                                    <p style={{ color: '#666', fontSize: '14px', textAlign: 'center', marginTop: '20px' }}>No collections yet.</p>
                                )}
                            </div>
                        </div>

                        <button className={styles.mockupFabBottom} onClick={() => setIsCreating(true)}>
                            <Plus size={28} color="white" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
