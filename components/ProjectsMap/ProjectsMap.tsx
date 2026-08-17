"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./ProjectsMap.module.css";
import { IconPin } from "@/components/Icons";

export interface MapProject {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  img: string;
  lat: number;
  lng: number;
  slug: string;
}

export const projectsList: MapProject[] = [
  {
    id: "p1",
    title: "Central Warehouse Complex",
    category: "Warehouse",
    location: "Colombo, Sri Lanka",
    area: "12,000 sqft",
    year: "2023",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    lat: 6.9271,
    lng: 79.8612,
    slug: "warehouses",
  },
  {
    id: "p2",
    title: "Garment Factory Building",
    category: "Factory",
    location: "Kandy, Sri Lanka",
    area: "8,500 sqft",
    year: "2023",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    lat: 7.2906,
    lng: 80.6337,
    slug: "factories",
  },
  {
    id: "p3",
    title: "International Airport Hangar",
    category: "Aircraft Hangar",
    location: "Katunayake, Sri Lanka",
    area: "25,000 sqft",
    year: "2022",
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80",
    lat: 7.1808,
    lng: 79.8841,
    slug: "aircraft-hangars",
  },
  {
    id: "p4",
    title: "Auto Dealer Vehicle Shed",
    category: "Vehicle Shed",
    location: "Gampaha, Sri Lanka",
    area: "6,000 sqft",
    year: "2022",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    lat: 7.084,
    lng: 79.9925,
    slug: "vehicle-sheds",
  },
  {
    id: "p5",
    title: "Export Processing Warehouse",
    category: "Warehouse",
    location: "Hambantota, Sri Lanka",
    area: "18,000 sqft",
    year: "2022",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    lat: 6.1246,
    lng: 81.1185,
    slug: "warehouses",
  },
  {
    id: "p6",
    title: "Food Processing Factory",
    category: "Factory",
    location: "Kurunegala, Sri Lanka",
    area: "9,200 sqft",
    year: "2021",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    lat: 7.4863,
    lng: 80.3647,
    slug: "factories",
  },
  {
    id: "p7",
    title: "Heavy Equipment Shed",
    category: "Vehicle Shed",
    location: "Galle, Sri Lanka",
    area: "4,500 sqft",
    year: "2021",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    lat: 6.0535,
    lng: 80.221,
    slug: "vehicle-sheds",
  },
  {
    id: "p8",
    title: "Pharmaceutical Factory",
    category: "Factory",
    location: "Kelaniya, Sri Lanka",
    area: "11,000 sqft",
    year: "2021",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    lat: 6.9554,
    lng: 79.922,
    slug: "factories",
  },
  {
    id: "p9",
    title: "Cold Storage Warehouse",
    category: "Warehouse",
    location: "Nuwara Eliya, Sri Lanka",
    area: "7,800 sqft",
    year: "2020",
    img: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80",
    lat: 6.9497,
    lng: 80.7891,
    slug: "warehouses",
  },
  {
    id: "p10",
    title: "Factory Structural Renovation",
    category: "Renovation",
    location: "Moratuwa, Sri Lanka",
    area: "14,000 sqft",
    year: "2020",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    lat: 6.773,
    lng: 79.8816,
    slug: "factory-renovations",
  },
  {
    id: "p11",
    title: "Aviation Training Hangar",
    category: "Aircraft Hangar",
    location: "Ratmalana, Sri Lanka",
    area: "16,500 sqft",
    year: "2020",
    img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80",
    lat: 6.8193,
    lng: 79.8784,
    slug: "aircraft-hangars",
  },
  {
    id: "p12",
    title: "Industrial Park Expansion",
    category: "Factory",
    location: "Biyagama, Sri Lanka",
    area: "22,000 sqft",
    year: "2019",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    lat: 6.9536,
    lng: 79.9877,
    slug: "factories",
  },
];

const categories = ["All", "Warehouse", "Factory", "Vehicle Shed", "Aircraft Hangar", "Renovation"];

export default function ProjectsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<unknown>(null);
  const [selectedProject, setSelectedProject] = useState<MapProject | null>(projectsList[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (!mapRef.current) return;
    if (leafletMap.current) return;

    // Dynamically load Leaflet on client side
    import("leaflet").then((L) => {
      // Load Leaflet CSS dynamically if not present
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Initialize map centered at Sri Lanka with touchpad/mouse scroll wheel zoom enabled
      const map = L.map(mapRef.current!, {
        center: [7.8731, 80.7718],
        zoom: 7.5,
        zoomControl: true,
        scrollWheelZoom: true,
        touchZoom: true,
      });

      leafletMap.current = map;

      setTimeout(() => {
        map.invalidateSize();
      }, 250);

      // ResizeObserver to automatically adjust map canvas height
      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });
      if (mapRef.current) {
        resizeObserver.observe(mapRef.current);
      }

      // Add OpenStreetMap Voyager light tile layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 18,
      }).addTo(map);

      // Add project markers
      const markerGroup = L.layerGroup().addTo(map);

      const focusProjectOnLeft = (project: MapProject) => {
        setSelectedProject(project);

        // Zoom to maximum street-level detail (zoom 16) with marker offset to the left of the map viewport
        const maxZoomLevel = 16;
        const targetPoint = map.project([project.lat, project.lng], maxZoomLevel);

        // Shift center right by 180px so the marker stays on the left side of map viewport
        const offsetPoint = L.point(targetPoint.x + 180, targetPoint.y);
        const offsetLatLng = map.unproject(offsetPoint, maxZoomLevel);

        map.flyTo(offsetLatLng, maxZoomLevel, {
          duration: 1.2,
          easeLinearity: 0.25,
        });
      };

      const renderMarkers = (cat: string) => {
        markerGroup.clearLayers();
        const filtered = cat === "All" ? projectsList : projectsList.filter((p) => p.category === cat);

        filtered.forEach((project) => {
          const customIcon = L.divIcon({
            className: "custom-leaflet-marker",
            html: `
              <div style="
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: ${project.category === "Warehouse" ? "#1A3C6E" : "#C8102E"};
                border: 3px solid #ffffff;
                box-shadow: 0 4px 14px rgba(200, 16, 46, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: transform 0.2s ease;
              ">
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #ffffff;"></div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });

          const marker = L.marker([project.lat, project.lng], { icon: customIcon });
          marker.on("click", () => {
            focusProjectOnLeft(project);
          });
          marker.addTo(markerGroup);
        });
      };

      renderMarkers("All");

      // Save marker re-render handle
      (mapRef.current as unknown as Record<string, unknown>).renderMarkers = renderMarkers;
    });

    return () => {
      if (leafletMap.current) {
        (leafletMap.current as { remove: () => void }).remove();
        leafletMap.current = null;
      }
    };
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const mapEl = mapRef.current as unknown as { renderMarkers?: (cat: string) => void };
    if (mapEl && mapEl.renderMarkers) {
      mapEl.renderMarkers(cat);
    }
  };

  const handleCloseCard = () => {
    setSelectedProject(null);
    // Reset map view to full Sri Lanka overview on close
    if (leafletMap.current) {
      const map = leafletMap.current as { flyTo: (center: [number, number], zoom: number, opts: object) => void };
      map.flyTo([7.8731, 80.7718], 7.5, { duration: 1 });
    }
  };

  return (
    <div className={styles.mapContainer}>
      {/* COMPACT TOP HEADER OVERLAY (Inside Map, ~2rem height) */}
      <div className={styles.compactHeader}>
        <div className={styles.mapTitle}>
          <span className={styles.liveBadge} />
          <span>Interactive Map</span>
        </div>
        <div className={styles.filterScrollArea}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAP CANVAS */}
      <div ref={mapRef} className={styles.mapWrapper} />

      {/* FLOATING PROJECT PREVIEW CARD (Inside Map, Bottom-Right) */}
      {selectedProject && (
        <div className={styles.floatingCard}>
          <button
            className={styles.closeBtn}
            onClick={handleCloseCard}
            aria-label="Close card"
          >
            ×
          </button>
          <div className={styles.cardImg}>
            <img src={selectedProject.img} alt={selectedProject.title} />
            <span className={styles.cardCategory}>{selectedProject.category}</span>
          </div>
          <div className={styles.cardBody}>
            <h4 className={styles.cardTitle}>{selectedProject.title}</h4>
            <div className={styles.cardMeta}>
              <div className={styles.cardMetaRow}>
                <IconPin size={14} color="var(--color-primary)" />
                <span>{selectedProject.location}</span>
              </div>
              <div className={styles.cardMetaRow}>
                <span>📏 {selectedProject.area}</span>
                <span>•</span>
                <span>📅 {selectedProject.year}</span>
              </div>
            </div>
            <Link href={`/steel-buildings/${selectedProject.slug}`} className={styles.cardLink}>
              View Details →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
