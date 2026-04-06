"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Search, X, Menu, TrendingUp, History as HistoryIcon } from "lucide-react";
import styles from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";
import { Company } from "../../types/company";

interface HeaderProps {
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    allCompanies?: Company[];
    onSelectCompany?: (id: string) => void;
}

export default function Header({
    searchQuery = "",
    onSearchChange,
    allCompanies = [],
    onSelectCompany,
}: HeaderProps) {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [focused, setFocused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const inputRef = useRef<HTMLInputElement>(null);

    // Suggestions: top 6 companies matching the query
    const suggestions =
        searchQuery.trim().length > 0
            ? allCompanies
                .filter((c) =>
                    c.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .slice(0, 6)
            : [];

    const showSuggestions = focused && suggestions.length > 0;

    function handleSelect(company: Company) {
        onSelectCompany?.(company.id);
        setFocused(false);
        inputRef.current?.blur();
    }

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img
                        src={!mounted ? "/nodus_logo_white.png" : (theme === "light" ? "/nodus_logo.png" : "/nodus_logo_white.png")}
                        alt="Nodus"
                        className={styles.logoImg}
                    />
                </div>
            </div>

            {/* Mobile-only inline search with suggestions */}
            <div className={styles.mobileSearch}>
                <Search size={15} className={styles.mobileSearchIcon} />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    className={styles.mobileSearchInput}
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setTimeout(() => setFocused(false), 150)}
                />
                {searchQuery && (
                    <button
                        className={styles.mobileClearSearch}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            onSearchChange?.("");
                        }}
                    >
                        <X size={13} />
                    </button>
                )}

                {/* Search suggestions dropdown */}
                {showSuggestions && (
                    <div className={styles.suggestions}>
                        {suggestions.map((company) => (
                            <button
                                key={company.id}
                                className={styles.suggestionItem}
                                onMouseDown={() => handleSelect(company)}
                            >
                                {company.logoUrl && (
                                    <img
                                        src={company.logoUrl}
                                        alt={company.name}
                                        className={styles.suggestionLogo}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random&size=32`;
                                        }}
                                    />
                                )}
                                {!company.logoUrl && (
                                    <div className={styles.suggestionLogoPlaceholder}>
                                        {company.name.charAt(0)}
                                    </div>
                                )}
                                <span className={styles.suggestionName}>{company.name}</span>
                                {company.city && (
                                    <span className={styles.suggestionCity}>{company.city}</span>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className={styles.mobileActions}>
                {/* Dark / Light toggle — mobile only */}
                <button
                    onClick={toggleTheme}
                    className={styles.mobileThemeBtn}
                    title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
                >
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                <button
                    className={styles.hamburgerBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    title="Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>


            <div className={styles.right}>
                {/* LIVE DATA badge */}
                <div className={styles.liveWrapper}>
                    <div className={styles.dot}></div>
                    <span className={styles.liveText}>LIVE DATA</span>
                </div>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className={styles.desktopThemeBtn}
                    title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
                >
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                {/* Hamburger menu for both desktop and mobile (aligned right on desktop) */}
                <button
                    className={styles.hamburgerBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    title="Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Unified Menu Overlay (Polished Dialogue) */}
            {isMenuOpen && (
                <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)}>
                    <div className={styles.menuDialog} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.menuHeader}>
                            <span className={styles.menuTitle}>Menu</span>
                            <button className={styles.closeMenuBtn} onClick={() => setIsMenuOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className={styles.menuGrid}>
                            <button className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
                                <TrendingUp size={22} className={styles.menuIcon} />
                                <div className={styles.menuItemText}>
                                    <span className={styles.menuItemLabel}>Trending</span>
                                    <span className={styles.menuItemDesc}>Popular startups this week</span>
                                </div>
                            </button>
                            <button className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
                                <HistoryIcon size={22} className={styles.menuIcon} />
                                <div className={styles.menuItemText}>
                                    <span className={styles.menuItemLabel}>History</span>
                                    <span className={styles.menuItemDesc}>Your recently viewed</span>
                                </div>
                            </button>
                            <Link href="/contact" className={`${styles.menuItem} ${styles.contactItem}`} onClick={() => setIsMenuOpen(false)}>
                                <div className={styles.menuIconPlaceholder}>?</div>
                                <div className={styles.menuItemText}>
                                    <span className={styles.menuItemLabel}>Contact</span>
                                    <span className={styles.menuItemDesc}>Get in touch with us</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
