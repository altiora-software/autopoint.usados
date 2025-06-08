// components/FilterBar.js
"use client";
import { useState } from "react";

/**
 * Componente de filtros para catálogo de autos
 * Permite filtrar por marca, año mínimo y máximo
 */

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
  
  // Opciones de marcas disponibles
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

  // Años disponibles (últimos 15 años)
  const años = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 15; i--) {
    años.push(i);
  }

  // Manejar cambios en los filtros
  const handleFilterChange = (key: FilterKey, value:string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    // Enviar filtros al componente padre
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    const emptyFilters = { marca: "", añoMin: "", añoMax: "" };
    setFilters(emptyFilters);
    if (onFilterChange) {
      onFilterChange(emptyFilters);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Filtrar Autos</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Filtro por marca */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marca
          </label>
          <select
            value={filters.marca}
            onChange={(e) => handleFilterChange("marca", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Año desde
          </label>
          <select
            value={filters.añoMin}
            onChange={(e) => handleFilterChange("añoMin", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Año hasta
          </label>
          <select
            value={filters.añoMax}
            onChange={(e) => handleFilterChange("añoMax", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>

      {/* Mostrar filtros activos */}
      {(filters.marca || filters.añoMin || filters.añoMax) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Filtros activos:
          </h4>
          <div className="flex flex-wrap gap-2">
            {filters.marca && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Marca: {filters.marca}
              </span>
            )}
            {filters.añoMin && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Desde: {filters.añoMin}
              </span>
            )}
            {filters.añoMax && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Hasta: {filters.añoMax}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
