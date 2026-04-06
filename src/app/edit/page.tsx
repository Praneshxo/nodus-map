"use client";

import dynamic from "next/dynamic";
import { realCompanies } from "../../data/realCompanies";
import styles from "../page.module.css";

// Dynamic import for the Map component
const MapWrapper = dynamic(() => import("../../components/Map/DynamicMap"), {
    ssr: false,
    loading: () => <div className={styles.mapLoading} />
});

export default function EditMapPage() {
    return (
        <main className={styles.main}>
            {/* Minimal Header for Edit mode could be added here if needed */}
            <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1000, background: 'white', padding: '10px 20px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontWeight: 600 }}>
                Edit Map View
            </div>
            <div className={styles.content}>
                <MapWrapper
                    companies={realCompanies}
                    selectedId={null}
                    onSelectCompany={() => { }}
                    hideTerrain={true}
                />
            </div>
        </main>
    );
}
