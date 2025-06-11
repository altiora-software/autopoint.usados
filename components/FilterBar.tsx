"use client";
import { useState } from "react";

interface Filters {
  marca: string;
  añoMin: string;
  añoMax: string;
}

interface FilterBarProps {
  onFilterChange?: (filters: Filters) => void;
}

type FilterKey = "marca" | "añoMin" | "añoMax";

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<Filters>({
    marca: "",
    añoMin: "",
    añoMax: "",
  });

  const marcas = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "Fiat",
    "Renault",
    "Peugeot",
  ];

  const años = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 15; i--) {
    años.push(i);
  }

  const handleFilterChange = (key: FilterKey, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearFilters = () => {
    const emptyFilters = { marca: "", añoMin: "", añoMax: "" };
    setFilters(emptyFilters);
    if (onFilterChange) {
      onFilterChange(emptyFilters);
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-md p-4 mb-6 text-foreground font-sans">
      <h3 className="text-lg font-heading font-semibold mb-4 text-primary">
        Filtrar Autos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Filtro por marca */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Marca
          </label>
          <select
            value={filters.marca}
            onChange={(e) => handleFilterChange("marca", e.target.value)}
            className="w-full p-2 border border-gray-700 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Todas las marcas</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro año mínimo */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Año desde
          </label>
          <select
            value={filters.añoMin}
            onChange={(e) => handleFilterChange("añoMin", e.target.value)}
            className="w-full p-2 border border-gray-700 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Sin mínimo</option>
            {años.map((año) => (
              <option key={año} value={año}>
                {año}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro año máximo */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Año hasta
          </label>
          <select
            value={filters.añoMax}
            onChange={(e) => handleFilterChange("añoMax", e.target.value)}
            className="w-full p-2 border border-gray-700 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Sin máximo</option>
            {años.map((año) => (
              <option key={año} value={año}>
                {año}
              </option>
            ))}
          </select>
        </div>

        {/* Botón limpiar filtros */}
        <div className="flex items-end">
          <button
            onClick={clearFilters}
            className="w-full bg-primary hover:bg-hover text-buttonText py-2 px-4 rounded-md font-medium transition-colors"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>

      {/* Mostrar filtros activos */}
      {(filters.marca || filters.añoMin || filters.añoMax) && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h4 className="text-sm font-medium mb-2 text-foreground">
            Filtros activos:
          </h4>
          <div className="flex flex-wrap gap-2">
            {filters.marca && (
              <span className="bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-full text-sm">
                Marca: {filters.marca}
              </span>
            )}
            {filters.añoMin && (
              <span className="bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-full text-sm">
                Desde: {filters.añoMin}
              </span>
            )}
            {filters.añoMax && (
              <span className="bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-full text-sm">
                Hasta: {filters.añoMax}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
