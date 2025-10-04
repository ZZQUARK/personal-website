'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

export default function AdventuresMap({ adventures }: { adventures: any[] }) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    if (!token || map.current || !mapContainer.current) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [77, 22], // India-centered
      zoom: 2,
    });

    adventures.forEach((adv) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '16px';
      el.style.height = '16px';
      el.style.borderRadius = '50%';
      el.style.background = 'radial-gradient(circle at center, #89f7fe, #66a6ff)';
      el.style.boxShadow = '0 0 10px rgba(102, 166, 255, 0.6)';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style='font-family: sans-serif; text-align: center; color: #333;'>
          <strong>${adv.title}</strong><br/>
          <small>${adv.location}</small>
        </div>
      `);

      new mapboxgl.Marker(el)
        .setLngLat([adv.lon, adv.lat])
        .setPopup(popup)
        .addTo(map.current as mapboxgl.Map);
    });

    return () => map.current?.remove();
  }, [adventures, token]);

  if (!token) {
    return (
      <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100">
        <div className="text-center text-gray-600">
          <p className="text-lg font-medium">🌍 Map unavailable</p>
          <p className="text-sm">Mapbox token missing or invalid.</p>
          <div className="relative w-64 h-32 mt-4 mx-auto opacity-70">
            <Image src="/images/world-fallback.svg" alt="World Map" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    );
  }

  return <div id="map-container" ref={mapContainer} className="w-full h-[500px] lg:h-[600px] rounded-xl shadow-lg" />;
}
