"use client";

import { useParams } from "next/navigation";
import autosData from "../../../data/autos";
import AutoDetailPage from "../../../components/AutoDetailPage";
import { Auto } from "../../../types/auto";

export default function AutoDetail() {
  const params = useParams();
  const id = params.id;

  // Buscar el auto según id
  const auto: Auto | undefined = autosData.find((a) => a.id.toString() === id);

  // Mostrar mensaje estilizado si no se encuentra el auto
  if (!auto)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-sans">
        <p className="text-xl font-semibold text-primary">Auto no encontrado</p>
      </div>
    );

  // Mostrar detalle si existe
  return <AutoDetailPage auto={auto} />;
}
