"use client";

import { useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar";
import AutoCard from "../../components/AutoCard";
// import autosData from "../../data/autos"

export interface Auto {
  id: string | number;
  marca: string;
  modelo: string;
  year: number;
  km: number;
  price: number;
  isNew: boolean;
  fuelType?: string;
  transmission?: string;
  imageUrl?: string;
  description?: string;
}

interface Filters {
  marca?: string;
  añoMin?: string;
  añoMax?: string;
}

export default function CatalogoPage() {
  const [autosData, setAutosData] = useState<Auto[]>([]);
  const [filteredAutos, setFilteredAutos] = useState<Auto[]>([]);

  // 🔁 Traer los datos reales desde la API
  useEffect(() => {
    const fetchAutos = async () => {
      const res = await fetch("/api/autos");
      const data = await res.json();
      setAutosData(data);
      setFilteredAutos(data); // Inicialmente mostrar todos
    };

    fetchAutos();
  }, []);

  const handleFilterChange = (filters: Filters) => {
    let autosFiltered = autosData;

    if (filters.marca) {
      autosFiltered = autosFiltered.filter(
        (auto) => auto.marca === filters.marca
      );
    }

    if (filters.añoMin && filters.añoMin.trim() !== "") {
      const añoMinNumber = parseInt(filters.añoMin);
      autosFiltered = autosFiltered.filter((auto) => auto.year >= añoMinNumber);
    }

    if (filters.añoMax && filters.añoMax.trim() !== "") {
      const añoMaxNumber = parseInt(filters.añoMax);
      autosFiltered = autosFiltered.filter((auto) => auto.year <= añoMaxNumber);
    }

    setFilteredAutos(autosFiltered);
  };

  const autosAMostrar = filteredAutos.length > 0 ? filteredAutos : autosData;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-background text-foreground font-sans min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
          Catálogo de Autos
        </h1>
        <p className="text-muted mt-2">
          Encuentra el auto perfecto entre nuestras {autosData.length} opciones
          disponibles
        </p>
      </div>

      <FilterBar onFilterChange={handleFilterChange} />

      <div className="mb-4">
        <p className="text-sm text-muted">
          Mostrando {autosAMostrar.length} de {autosData.length} autos
        </p>
      </div>

      {autosAMostrar.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {autosAMostrar.map((auto) => (
            <AutoCard key={auto.id} auto={auto} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-muted mb-4">
            <svg
              className="mx-auto h-16 w-16 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.7-2.7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-muted mb-2">
            No se encontraron autos
          </h3>
          <p className="text-muted">
            Intenta ajustar los filtros para ver más resultados
          </p>
        </div>
      )}
    </div>
  );
}
