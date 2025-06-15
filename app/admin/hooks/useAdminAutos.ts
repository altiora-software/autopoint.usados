import { useCallback, useState } from "react";
import type { AdminAuto } from "@/types/admin";

export function useAdminAutos() {
  const [autos, setAutos] = useState<AdminAuto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAutos = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/autos");
      if (!res.ok) throw new Error("Error al cargar autos");
      const data = await res.json();
      setAutos(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteAuto = useCallback(
    async (id: number) => {
      try {
        const res = await fetch("/api/autos", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Error al eliminar el auto");
        }
        // Actualizar autos luego de eliminar
        fetchAutos();
      } catch (err) {
        setError((err as Error).message);
      }
    },
    [fetchAutos]
  );
  

  return {
    autos,
    loading,
    error,
    fetchAutos,
    deleteAuto,
    setError,
  };
}
