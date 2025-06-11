import Image from "next/image";
import React from "react";
import { Auto } from "../types/auto";

interface AutoCardProps {
  auto: Auto;
}

export default function AutoCard({ auto }: AutoCardProps) {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number): string => {
    return new Intl.NumberFormat("es-AR").format(km);
  };

  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-700">
      {/* Imagen del auto */}
      <div className="relative">
        {auto.imageUrl ? (
          <Image
            height={200}
            width={300}
            src={auto.imageUrl}
            alt={`${auto.marca} ${auto.modelo}`}
            className="w-full h-48 object-cover"
            priority={false}
          />
        ) : (
          <div className="w-full h-48 bg-gray-900 flex items-center justify-center text-gray-500">
            Sin imagen
          </div>
        )}

        {/* Etiqueta 0km o Usado */}
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              auto.isNew
                ? "bg-green-600 text-background"
                : "bg-blue-600 text-background"
            }`}
          >
            {auto.isNew ? "0km" : "Usado"}
          </span>
        </div>
      </div>

      {/* Información del auto */}
      <div className="p-4">
        {/* Marca y modelo */}
        <h3 className="text-lg font-semibold text-primary mb-2">
          {auto.marca} {auto.modelo}
        </h3>

        {/* Detalles técnicos */}
        <div className="space-y-1 text-sm text-muted mb-3">
          <div className="flex justify-between">
            <span>Año:</span>
            <span className="font-medium">{auto.year}</span>
          </div>
          <div className="flex justify-between">
            <span>Kilometraje:</span>
            <span className="font-medium">{formatKm(auto.km)} km</span>
          </div>
          <div className="flex justify-between">
            <span>Combustible:</span>
            <span className="font-medium">{auto.fuelType || "-"}</span>
          </div>
        </div>

        {/* Precio */}
        <div className="text-xl font-bold text-primary mb-3">
          {formatPrice(auto.price)}
        </div>

        {/* Botón ver detalle */}
        <a
          href={`/autos/${auto.id}`}
          className="w-full bg-primary hover:bg-hover text-buttonText text-center py-2 px-4 rounded-lg font-medium transition-colors block"
        >
          Ver Detalle
        </a>
      </div>
    </div>
  );
}
