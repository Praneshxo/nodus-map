import dynamic from "next/dynamic";

// MapController contains Leaflet code, so it MUST be dynamically imported with ssr: false
const MapController = dynamic(() => import("./MapController"), {
    ssr: false,
    loading: () => <div style={{ height: "100vh", width: "100vw", background: "var(--bg-primary)" }} />
});

export default MapController;
