"use client";

import { useState } from "react";
import { Auto } from "../types/auto";
import Image from "next/image";

import img1 from "/public/auto1.jpeg";

interface AutoDetailPageProps {
  auto: Auto;
}

export default function AutoDetailPage({ auto }: AutoDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number) => {
    return new Intl.NumberFormat("es-AR").format(km);
  };
  // const srcImage =
  //   auto.images && auto.images.length > 0
  //     ? auto.images[currentImageIndex]
  //     : auto.imageUrl ?? "/autos/default.jpg"; // fallback si no hay imageUrl

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Título principal */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {auto.marca} {auto.modelo} {auto.year}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              auto.isNew ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            {auto.isNew ? "0km" : "Usado"}
          </span>
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(auto.price)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Galería de imágenes */}
        <div>
          {/* Imagen principal */}
          <div className="mb-4">
            <Image
              height={300}
              width={600}
              src={img1}
              alt={`${auto.marca} ${auto.modelo} - Imagen ${
                currentImageIndex + 1
              }`}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Miniaturas */}
          {auto.images && (
            <div className="grid grid-cols-4 gap-2">
              {auto.images.map((imagen, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`overflow-hidden rounded border-2 transition-colors ${
                    currentImageIndex === index
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    height={100}
                    width={100}
                    src={imagen}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información detallada */}
        <div>
          {/* Características principales */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Año:</span>
                <span className="font-medium">{auto.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kilometraje:</span>
                <span className="font-medium">{formatKm(auto.km)} km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Combustible:</span>
                <span className="font-medium">{auto.fuelType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Motor:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.motor}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transmisión:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.transmision}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracción:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.traccion}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Puertas:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.puertas}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Asientos:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.asientos}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.color}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patente:</span>
                <span className="font-medium">
                  {auto.caracteristicas?.patente}
                </span>
              </div>
            </div>
          </div>

          {/* Equipamiento */}
          {auto.equipamiento && auto.equipamiento.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Equipamiento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {auto.equipamiento.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Descripción */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Descripción</h2>
            <p className="text-gray-700 leading-relaxed">{auto.description}</p>
          </div>

          {/* Botones de contacto */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/5491234567890?text=Hola! Me interesa el ${
                auto.marca
              } ${auto.modelo} ${
                auto.year
              } que tienen publicado por ${formatPrice(auto.price)}`}
              className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors block"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="tel:+5491234567890"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors block"
            >
              Llamar por teléfono
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
