"use client";
import { RefObject } from "react";

// import { Auto } from "../../../types/auto"; // Asegurate de tener esta interfaz o definirla aquí

interface Auto {
  id: number;
  marca: string;
  modelo: string;
  year: number;
  km: number;
  price: number;
  isNew: boolean;
  fuelType: string;
  imageUrl: string;
  images: string[];
  caracteristicas: Record<string, unknown>;
  equipamiento: string[];
  description?: string;
}
  

interface AutoListProps {
  autos: Auto[];
  loading: boolean;
  error: string;
  onEdit: (auto: Auto) => void;
  onDelete: (id: number) => void;
  listRef: RefObject<HTMLUListElement | null>;
}

export default function AutoList({
  autos,
  loading,
  error,
  onEdit,
  onDelete,
  listRef,
}: AutoListProps) {
  if (loading) return <p>Cargando autos...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (autos.length === 0) return <p>No hay autos cargados.</p>;

  return (
    <section className="max-w-4xl mx-auto" aria-label="Listado de autos">
      <h2 className="text-2xl font-semibold mb-4">Listado de Autos</h2>
      <ul ref={listRef} className="space-y-3">
        {autos.map((auto) => (
          <li
            key={auto.id}
            className="border p-3 rounded flex justify-between items-center hover:shadow-md"
          >
            <div>
              <p>
                <strong>{auto.marca}</strong> {auto.modelo} ({auto.year}) - $
                {auto.price.toLocaleString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(auto)}
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  if (confirm("¿Estás seguro que querés eliminar este auto?")) {
                    onDelete(auto.id);
                  }
                }}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
