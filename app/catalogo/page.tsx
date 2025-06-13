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
  // Estado para controlar si la API está cargando datos
  // const [autosData, setAutosData] = useState<Auto[]>([]);
  // Estado para manejar errores en la llamada a la API
  const [filteredAutos, setFilteredAutos] = useState<Auto[]>([]);

  // Estado para controlar si la API está cargando datos
  const [loading, setLoading] = useState<boolean>(true);
  //  Estado para manejar errores en la llamada a la API
  const [error, setError] = useState<string | null>(null);

  // Estado principal con datos de autos, inicializado con el mock local
  const [autosDataState, setAutosDataState] = useState<Auto[]>([]);
  // Estado para autos filtrados según filtros aplicados
  // const [filteredAutos, setFilteredAutos] = useState<Auto[]>(autosData);
// useEffect para moock local
  // useEffect(() => {
  //   // Simulamos carga inicial de datos para liberar el "loading"
  //   setAutosDataState(autosData);
  //   setFilteredAutos(autosData);
  //   setLoading(false); // <--- Esto libera el render para mostrar autos
  // }, []);

  // 🔁 Traer los datos reales desde la API
  useEffect(() => {
    const fetchAutos = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/autos");
        if (!res.ok) {
          // Si hay error HTTP, lanzar excepción
          throw new Error(`Error al obtener autos: ${res.statusText}`);
        }
        const data = await res.json();
        setAutosDataState(data);
        setFilteredAutos(data); // Inicialmente mostrar todos
      } catch (err: unknown) {
        if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido al cargar los autos");
      }
      } finally {
        setLoading(false);
      }
    };

    fetchAutos();
  }, []);

  const handleFilterChange = (filters: Filters) => {
    let autosFiltered = autosDataState;

    if (filters.marca) {
      // Comparamos en minúsculas para evitar problemas, normalizar
      autosFiltered = autosFiltered.filter(
        (auto) => auto.marca.toLowerCase() === filters.marca!.toLowerCase()
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
  // Se decide qué lista mostrar, la filtrada o la completa
  const autosAMostrar =
    filteredAutos.length > 0 ? filteredAutos : autosDataState;

  console.log(autosAMostrar, "autosAMostrar");

  //Mostrar mensaje mientras se cargan datos
  if (loading) {
    return <div className="text-center py-12">Cargando autos...</div>;
  }

  // Mostrar mensaje si hay error
  if (error) {
    return <div className="text-center py-12 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-background text-foreground font-sans min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
          Catálogo de Autos
        </h1>
        <p className="text-muted mt-2">
          Encuentra el auto perfecto entre nuestras {autosDataState.length}{" "}
          opciones disponibles
        </p>
      </div>
      {/* Barra de filtros */}
      <FilterBar onFilterChange={handleFilterChange} />

      <div className="mb-4">
        <p className="text-sm text-muted">
          Mostrando {autosAMostrar.length} de {autosDataState.length} autos
        </p>
      </div>
      {/* Mostrar autos o mensaje si no hay resultados */}
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
