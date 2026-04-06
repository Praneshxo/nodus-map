"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CompanyModal from "../components/CompanyDetails/CompanyModal";
const Landing = dynamic(() => import("../components/Landing/Landing"), { ssr: false });
const ObsidianLoader = dynamic(() => import("../components/Loader/ObsidianLoader"), { ssr: false });
import { realCompanies } from "../data/realCompanies";
import styles from "./page.module.css";

// Dynamic import for the Map component
const MapWrapper = dynamic(() => import("../components/Map/DynamicMap"), {
  ssr: false,
  loading: () => <div className={styles.mapLoading} />
});

export default function Home() {
  return (
    <Landing />
  );
}
