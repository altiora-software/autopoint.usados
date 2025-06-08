// app/autos/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import autosData from "../../../data/autos";
import AutoDetailPage from "../../../components/AutoDetailPage";
import { Auto } from "../../../types/auto";

export default function AutoDetail() {
  const params = useParams();
  const id = params.id;

  // Buscamos el auto con el id recibido como string
  const auto: Auto | undefined = autosData.find((a) => a.id.toString() === id);

  if (!auto) return <div>Auto no encontrado</div>;

  // Pasamos el objeto auto completo al componente detalle
  return <AutoDetailPage auto={auto} />;
}
