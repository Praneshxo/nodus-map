"use client";

import { useEffect, useMemo, useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import type { StyleSpecification, LayerSpecification } from "maplibre-gl";
import { Company } from "../../types/company";
import { useTheme } from "../../context/ThemeContext";
import "./Map.css";

interface MapControllerProps {
    companies: Company[];
    selectedId: string | null;
    onSelectCompany: (id: string | null) => void;
    hideTerrain?: boolean;
}

const LIGHT_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const DARK_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

/** Fetch Carto style and (for dark) brighten text-color layers so labels are readable. */
async function fetchStyle(url: string, isDark: boolean): Promise<StyleSpecification> {
    const res = await fetch(url);
    const style: StyleSpecification = await res.json();

    if (isDark) {
        style.layers = style.layers.map((layer: LayerSpecification) => {
            if (layer.type === "symbol") {
                const paint = (layer as { paint?: Record<string, unknown> }).paint;
                if (paint?.["text-color"]) {
                    return { ...layer, paint: { ...paint, "text-color": "#94a3b8" } };
                }
            }
            return layer;
        });
    }

    return style;
}

/** Detect mobile via matchMedia — runs once */
const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

export default function MapController({ companies, selectedId, onSelectCompany }: MapControllerProps) {
    const { theme } = useTheme();
    const [mapStyle, setMapStyle] = useState<StyleSpecification | string>(
        theme === "dark" ? DARK_STYLE : LIGHT_STYLE
    );

    useEffect(() => {
        const isDark = theme === "dark";
        fetchStyle(isDark ? DARK_STYLE : LIGHT_STYLE, isDark).then(setMapStyle);
    }, [theme]);

    const spreadCompanies = useMemo(() => {
        const groups: Record<string, Company[]> = {};
        companies.forEach(c => {
            const key = `${c.lat}_${c.lng}`;
            if (!groups[key]) groups[key] = [];
            groups[key].push(c);
        });

        const SPREAD_RADIUS = 0.004;
        return companies.map(c => {
            const key = `${c.lat}_${c.lng}`;
            const group = groups[key];
            if (group.length === 1) return { ...c, displayLat: c.lat, displayLng: c.lng };
            const idx = group.indexOf(c);
            const angle = (2 * Math.PI * idx) / group.length;
            return {
                ...c,
                displayLat: c.lat + SPREAD_RADIUS * Math.cos(angle),
                displayLng: c.lng + SPREAD_RADIUS * Math.sin(angle),
            };
        });
    }, [companies]);

    // On mobile use smaller fixed sizes for performance
    const pinSize = isMobile ? 24 : 32;
    const selectedPinSize = isMobile ? 36 : 48;

    return (
        <div className="map-container">
            <Map
                initialViewState={{
                    longitude: 78.9629,
                    latitude: 22.5937,
                    zoom: isMobile ? 4 : 3.5,
                    pitch: 0,
                    bearing: 0
                }}
                maxBounds={[[45, 1], [110, 45]]}
                mapStyle={mapStyle}
                minZoom={2}
                maxZoom={20}
                dragRotate={false}
                pitchWithRotate={false}
                touchPitch={false}
                attributionControl={false}
                onClick={() => onSelectCompany(null)}
                style={{ width: "100%", height: "100%" }}
                // Performance: reduce tile rendering overhead
                {...(isMobile ? {
                    maxTileCacheSize: 20,
                    fadeDuration: 0,
                } : {})}
            >
                <NavigationControl
                    position="top-right"
                    showCompass={false}
                    style={{ marginTop: isMobile ? "116px" : "76px", marginRight: "12px" }}
                />

                {spreadCompanies.map(company => {
                    const isSelected = company.id === selectedId;
                    const size = isSelected ? selectedPinSize : pinSize;

                    return (
                        <Marker
                            key={company.id}
                            longitude={company.displayLng}
                            latitude={company.displayLat}
                            anchor="center"
                            style={{ zIndex: isSelected ? 100 : 1 }}
                        >
                            <div className={`company-pin ${isSelected ? "selected" : ""}`}>
                                {company.logoUrl ? (
                                    <img
                                        className="pin-logo"
                                        src={company.logoUrl}
                                        style={{ width: size, height: size, cursor: "pointer" }}
                                        alt={company.name}
                                        loading="lazy"
                                        decoding="async"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSelectCompany(company.id);
                                        }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random`;
                                        }}
                                    />
                                ) : (
                                    <div
                                        className="pin-logo"
                                        style={{
                                            width: size,
                                            height: size,
                                            cursor: "pointer",
                                            backgroundColor: "var(--primary-brand)",
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "10px",
                                            fontWeight: "bold",
                                            borderRadius: "50%",
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSelectCompany(company.id);
                                        }}
                                    >
                                        {company.name.charAt(0)}
                                    </div>
                                )}
                                {/* Only show label on hover/selected — CSS handles opacity */}
                                <div className="marker-label" style={{ pointerEvents: "none" }}>
                                    {company.name}
                                </div>
                            </div>
                        </Marker>
                    );
                })}
            </Map>
        </div>
    );
}
