"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyModal from "../../components/CompanyDetails/CompanyModal";
import { realCompanies } from "../../data/realCompanies";
import styles from "../page.module.css";

// Dynamic import for the Map component
const MapWrapper = dynamic(() => import("../../components/Map/DynamicMap"), {
    ssr: false,
    loading: () => <div className={styles.mapLoading} />
});

export default function MapPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedState, setSelectedState] = useState("All");
    const [selectedCity, setSelectedCity] = useState("All");

    // Filtering logic
    const filteredCompanies = realCompanies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            company.category?.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesState = selectedState === "All" || company.state === selectedState;
        const matchesCity = selectedCity === "All" || company.city === selectedCity;

        return matchesSearch && matchesState && matchesCity;
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
    };

    return (
        <main className={styles.main}>
            <Header
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                allCompanies={realCompanies}
                onSelectCompany={(id) => { setSearchQuery(""); setSelectedId(id); }}
            />

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
