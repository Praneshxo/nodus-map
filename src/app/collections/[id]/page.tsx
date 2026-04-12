"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase";
import { realCompanies } from "../../../data/realCompanies";
import { Company } from "../../../types/company";
import styles from "./SharedCollection.module.css";
import CompanyCard from "../../../components/CompanyCard/CompanyCard";
import { Lock, Share2, ArrowLeft } from "lucide-react";

export default function SharedCollectionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [collection, setCollection] = useState<{ name: string } | null>(null);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push("/signup");
                return;
            }
            setAuthenticated(true);
            fetchCollectionData();
        };

        const fetchCollectionData = async () => {
            try {
                // Get collection name
                const { data: collData } = await supabase
                    .from('collections')
                    .select('name')
                    .eq('id', id)
                    .single();

                if (collData) setCollection(collData);

                // Get items
                const { data: items } = await supabase
                    .from('collection_items')
                    .select('company_id')
                    .eq('collection_id', id);

                if (items) {
                    const companyIds = items.map(i => i.company_id);
                    const filtered = realCompanies.filter(c => companyIds.includes(c.id));
                    setCompanies(filtered);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [id, router]);

    if (!authenticated) {
        return (
            <div className={styles.loadingScreen}>
                <Lock size={40} />
                <p>Redirecting to login...</p>
            </div>
        );
    }

    if (loading) return <div className={styles.loadingScreen}>Loading collection...</div>;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button className={styles.backBtn} onClick={() => router.push("/map")}>
                    <ArrowLeft size={20} /> Back to Map
                </button>
                <div className={styles.titleInfo}>
                    <h1>{collection?.name || "Shared Collection"}</h1>
                    <p>{companies.length} companies shared with you</p>
                </div>
                <button className={styles.shareBtn} onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                }}>
                    <Share2 size={18} /> Share
                </button>
            </header>

            <div className={styles.grid}>
                {companies.map(company => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        isSelected={false}
                        onClick={() => router.push(`/map?id=${company.id}`)}
                    />
                ))}
            </div>

            {companies.length === 0 && (
                <div className={styles.empty}>
                    <p>This collection is empty.</p>
                </div>
            )}
        </div>
    );
}
