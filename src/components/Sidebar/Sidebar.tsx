"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, TrendingUp, History, Search } from "lucide-react";
import { Company } from "../../types/company";
import CompanyCard from "../CompanyCard/CompanyCard";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    companies: Company[];
    allCompanies: Company[];
    selectedId: string | null;
    onSelectCompany: (id: string | null) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedState: string;
    onStateChange: (state: string) => void;
    selectedCity: string;
    onCityChange: (city: string) => void;
    onClearFilters: () => void;
    isCollectionActive?: boolean;
}

export default function Sidebar({
    companies,
    allCompanies,
    selectedId,
    onSelectCompany,
    searchQuery,
    onSearchChange,
    selectedState,
    onStateChange,
    selectedCity,
    onCityChange,
    onClearFilters,
    isCollectionActive,
}: SidebarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const stateRef = useRef<HTMLDivElement>(null);
    const cityRef = useRef<HTMLDivElement>(null);

    const [stateOpen, setStateOpen] = useState(false);
    const [cityOpen, setCityOpen] = useState(false);

    const hasActiveFilters =
        searchQuery !== "" || selectedState !== "All" || selectedCity !== "All" || Boolean(isCollectionActive);

    const states = [
        "All",
        ...Array.from(new Set(allCompanies.map((c) => c.state).filter((s): s is string => Boolean(s)))).sort(),
    ];
    const cities = [
        "All",
        ...Array.from(
            new Set(
                allCompanies
                    .filter((c) => selectedState === "All" || c.state === selectedState)
                    .map((c) => c.city)
                    .filter((s): s is string => Boolean(s))
            )
        ).sort(),
    ];

    // Close dropdowns on outside click
    useEffect(() => {
        function handleClick(e: PointerEvent) {
            if (stateRef.current && !stateRef.current.contains(e.target as Node)) {
                setStateOpen(false);
            }
            if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
                setCityOpen(false);
            }
        }
        document.addEventListener("pointerdown", handleClick as EventListener);
        return () => {
            document.removeEventListener("pointerdown", handleClick as EventListener);
        };
    }, []);

    // Desktop slide-in animation
    useEffect(() => {
        if (sidebarRef.current) {
            gsap.fromTo(
                sidebarRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }
    }, []);

    return (
        <div className={styles.sidebarWrapper} ref={sidebarRef}>

            {/* ── Mobile filter strip (State + City + Clear) ── */}
            <div className={styles.mobileFilterBar}>
                {/* Custom State dropdown */}
                <div className={styles.mobileDropdown}>
                    <button
                        className={styles.mobileDropdownBtn}
                        onClick={() => {
                            setStateOpen((v) => !v);
                            setCityOpen(false);
                        }}
                    >
                        <span>{selectedState === "All" ? "State" : selectedState}</span>
                        <ChevronDown size={12} className={stateOpen ? styles.chevronOpen : ""} />
                    </button>

                    {stateOpen && (
                        <>
                            <div
                                className={styles.mobileDropdownBackdrop}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setStateOpen(false);
                                }}
                            />
                            <div className={styles.mobileDropdownList}>
                                {states.map((state) => (
                                    <button
                                        key={state}
                                        className={`${styles.mobileDropdownItem} ${selectedState === state ? styles.mobileDropdownItemActive : ""}`}
                                        onClick={() => {
                                            onStateChange(state);
                                            onCityChange("All");
                                            setStateOpen(false);
                                        }}
                                    >
                                        {state === "All" ? "All States" : state}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Custom City dropdown */}
                <div className={styles.mobileDropdown}>
                    <button
                        className={styles.mobileDropdownBtn}
                        onClick={() => {
                            setCityOpen((v) => !v);
                            setStateOpen(false);
                        }}
                    >
                        <span>{selectedCity === "All" ? "City" : selectedCity}</span>
                        <ChevronDown size={12} className={cityOpen ? styles.chevronOpen : ""} />
                    </button>

                    {cityOpen && (
                        <>
                            <div
                                className={styles.mobileDropdownBackdrop}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCityOpen(false);
                                }}
                            />
                            <div className={styles.mobileDropdownList}>
                                {cities.map((city) => (
                                    <button
                                        key={city}
                                        className={`${styles.mobileDropdownItem} ${selectedCity === city ? styles.mobileDropdownItemActive : ""}`}
                                        onClick={() => {
                                            onCityChange(city);
                                            setCityOpen(false);
                                        }}
                                    >
                                        {city === "All" ? "All Cities" : city}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Clear filter text button */}
                <button
                    className={`${styles.mobileClearBtn} ${hasActiveFilters ? styles.mobileClearBtnActive : ""}`}
                    onClick={onClearFilters}
                    onPointerDown={(e) => {
                        e.preventDefault();
                        onClearFilters();
                    }}
                >
                    Clear
                </button>
            </div>

            {/* ── Desktop sidebar panel ── */}
            <div className={styles.sidebarContent}>
                {/* Search Input */}
                <div className={styles.searchContainer}>
                    <Search className={styles.sidebarSearchIcon} size={16} />
                    <input
                        type="text"
                        placeholder="Search Company"
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* Filters — desktop custom dropdowns */}
                <div className={styles.filtersContainer}>
                    <div className={styles.desktopDropdownWrapper} ref={stateRef}>
                        <button
                            className={styles.desktopDropdownBtn}
                            onClick={() => {
                                setStateOpen((v) => !v);
                                setCityOpen(false);
                            }}
                        >
                            <span>{selectedState === "All" ? "State" : selectedState}</span>
                            <ChevronDown size={14} className={stateOpen ? styles.chevronOpen : ""} />
                        </button>
                        {stateOpen && (
                            <div className={styles.desktopDropdownList}>
                                {states.map((s) => (
                                    <button
                                        key={s}
                                        className={`${styles.desktopDropdownItem} ${selectedState === s ? styles.desktopDropdownItemActive : ""}`}
                                        onClick={() => {
                                            onStateChange(s);
                                            onCityChange("All");
                                            setStateOpen(false);
                                        }}
                                    >
                                        {s === "All" ? "All States" : s}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.desktopDropdownWrapper} ref={cityRef}>
                        <button
                            className={styles.desktopDropdownBtn}
                            onClick={() => {
                                setCityOpen((v) => !v);
                                setStateOpen(false);
                            }}
                        >
                            <span>{selectedCity === "All" ? "City" : selectedCity}</span>
                            <ChevronDown size={14} className={cityOpen ? styles.chevronOpen : ""} />
                        </button>
                        {cityOpen && (
                            <div className={styles.desktopDropdownList}>
                                {cities.map((c) => (
                                    <button
                                        key={c}
                                        className={`${styles.desktopDropdownItem} ${selectedCity === c ? styles.desktopDropdownItemActive : ""}`}
                                        onClick={() => {
                                            onCityChange(c);
                                            setCityOpen(false);
                                        }}
                                    >
                                        {c === "All" ? "All Cities" : c}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* List Header */}
                <div className={styles.listHeader}>
                    <span>CURATED LIST ({companies.length})</span>
                    {hasActiveFilters && (
                        <button className={styles.clearBtn} onClick={onClearFilters}>
                            Clear Filters
                        </button>
                    )}
                </div>

                {/* Company List */}
                <div className={styles.companyListContainer}>
                    {companies.map((company) => (
                        <CompanyCard
                            key={company.id}
                            company={company}
                            isSelected={selectedId === company.id}
                            onClick={() => onSelectCompany(company.id)}
                        />
                    ))}
                    {companies.length === 0 && (
                        <div className={styles.noResults}>
                            No companies found matching your filters.
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
