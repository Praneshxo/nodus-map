"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyModal from "../../components/CompanyDetails/CompanyModal";
import { realCompanies } from "../../data/realCompanies";
import styles from "../page.module.css";
import { supabase } from "../../utils/supabase";
import { useRouter } from "next/navigation";




// Dynamic import for the Map component
const MapWrapper = dynamic(() => import("../../components/Map/DynamicMap"), {
    ssr: false,
    loading: () => <div className={styles.mapLoading} />
});

export default function MapPage() {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedState, setSelectedState] = useState("All");
    const [selectedCity, setSelectedCity] = useState("All");
    const [collectionCompanyIds, setCollectionCompanyIds] = useState<string[] | null>(null);
    const [trendingIds, setTrendingIds] = useState<string[] | null>(null);
    const [showCollectionsModal, setShowCollectionsModal] = useState(false);
    const [userCollections, setUserCollections] = useState<{ id: string, name: string }[]>([]);
    const [isAuthChecking, setIsAuthChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/signup');
            } else {
                setIsAuthChecking(false);
            }
        };
        checkAuth();
    }, [router]);

    useEffect(() => {

        const script = document.createElement("script");
        script.dataset.zone = '10824080';
        script.src = 'https://al5sm.com/tag.min.js';
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Filtering logic
    const filteredCompanies = realCompanies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            company.category?.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesState = selectedState === "All" || company.state === selectedState;
        const matchesCity = selectedCity === "All" || company.city === selectedCity;

        const matchesCollection = !collectionCompanyIds || collectionCompanyIds.includes(company.id);
        const matchesTrending = !trendingIds || trendingIds.includes(company.id);

        return matchesSearch && matchesState && matchesCity && matchesCollection && matchesTrending;
    });


    const selectedCompany = selectedId ? realCompanies.find(c => c.id === selectedId) || null : null;

    const handleSelectCompany = (id: string | null) => {
        setSelectedId(id);
    };

    const handleCloseModal = () => {
        setSelectedId(null);
    };

    const handleClearFilters = () => {
        setSearchQuery("");
        setSelectedState("All");
        setSelectedCity("All");
        setCollectionCompanyIds(null);
        setTrendingIds(null);
    };

    const handleTrendingSelect = () => {
        const shuffled = [...realCompanies].sort(() => 0.5 - Math.random());
        setTrendingIds(shuffled.slice(0, 10).map(c => c.id));
        setCollectionCompanyIds(null);
    };

    const handleCollectionSelect = async (collectionId: string) => {
        const { data } = await supabase
            .from('collection_items')
            .select('company_id')
            .eq('collection_id', collectionId);

        if (data) {
            setCollectionCompanyIds(data.map(item => item.company_id));
            setTrendingIds(null);
            setShowCollectionsModal(false);
        }
    };

    const openCollectionsModal = async () => {
        setShowCollectionsModal(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data } = await supabase.from('collections').select('id, name').eq('user_id', user.id);
        if (data) {
            // Deduplicate by name
            const uniqueCols: { id: string, name: string }[] = [];
            const seenNames = new Set<string>();
            for (const col of data) {
                if (!seenNames.has(col.name)) {
                    uniqueCols.push(col);
                    seenNames.add(col.name);
                }
            }
            setUserCollections(uniqueCols);
        }
    };

    if (isAuthChecking) {
        return <div className={styles.mapLoading} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Checking Authentication...</div>;
    }



    return (
        <main className={styles.main}>
            <Header
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                allCompanies={realCompanies}
                onSelectCompany={(id) => { setSearchQuery(""); setSelectedId(id); }}
                onTrending={handleTrendingSelect}
                onOpenCollections={openCollectionsModal}
            />

            {/* Central Collections Dialog */}
            {showCollectionsModal && (
                <div className={styles.collectionsOverlay} onClick={() => setShowCollectionsModal(false)}>
                    <div className={styles.collectionsDialog} onClick={e => e.stopPropagation()}>
                        <div className={styles.collectionsDialogHeader}>
                            <h3>Collections</h3>
                            <button onClick={() => setShowCollectionsModal(false)}>×</button>
                        </div>
                        <div className={styles.collectionsDialogList}>
                            {userCollections.map(c => (
                                <div key={c.id} className={styles.collectionBox} onClick={() => handleCollectionSelect(c.id)}>
                                    <div className={styles.collectionIconPlaceholder}>C</div>
                                    <div className={styles.collectionBoxInfo}>
                                        <h4>{c.name}</h4>
                                        <span>Private</span>
                                    </div>
                                </div>
                            ))}
                            {userCollections.length === 0 && <p style={{ color: '#888' }}>No collections found.</p>}
                        </div>
                    </div>
                </div>
            )}



            <div className={styles.content}>
                <Sidebar
                    companies={filteredCompanies}
                    allCompanies={realCompanies}
                    selectedId={selectedId}
                    onSelectCompany={handleSelectCompany}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedState={selectedState}
                    onStateChange={setSelectedState}
                    selectedCity={selectedCity}
                    onCityChange={setSelectedCity}
                    onClearFilters={handleClearFilters}
                    isCollectionActive={collectionCompanyIds !== null}
                />

                <MapWrapper
                    companies={filteredCompanies}
                    selectedId={selectedId}
                    onSelectCompany={handleSelectCompany}
                    hideTerrain={true}
                />

                <CompanyModal
                    company={selectedCompany}
                    onClose={handleCloseModal}
                />
            </div>
        </main>
    );
}
