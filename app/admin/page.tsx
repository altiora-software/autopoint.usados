"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
// Importamos los componentes necesarios
import AutoForm from "./components/AutoForm";
import AutoList from "./components/AutoList";
import AdminSidebar from "./components/AdminSidebar";
import MobileNav from "./components/MobileNav";
import Alert from "./components/Alert";
// import type { Auto } from "../../types/auto";
import type { Auto as BaseAuto } from "@/types/auto";

import { useAdminAutos } from "./hooks/useAdminAutos";

type AdminAuto = BaseAuto & {
  id: number;
  fuelType: string;
  imageUrl: string;
  images: string[];
  caracteristicas: Record<string, unknown>;
  equipamiento: string[];
};

export default function AdminPage() {
  const { data: session, status } = useSession();

  // estado para cambiar entre vista listado y formulario
  const [view, setView] = useState<"list" | "form">("list");

  // referencia para hacer scroll a lista en mobile
  const listRef = useRef<HTMLUListElement | null>(null);

  const { autos, loading, error, fetchAutos, deleteAuto, setError } =
    useAdminAutos();

  const [success, setSuccess] = useState("");

  // Form state con id para saber si es edición o creación
  const [form, setForm] = useState({
    id: 0, // 0 indica nuevo auto, otro valor indica editar
    marca: "",
    modelo: "",
    year: "",
    km: "",
    price: "",
    isNew: false,
    fuelType: "",
    imageUrl: "",
    images: "[]",
    caracteristicas: "{}",
    equipamiento: "[]",
    description: "",
  });

  // Al montar y cuando cambia status, traemos autos si está autenticado
  useEffect(() => {
    if (status === "authenticated") {
      fetchAutos();
    }
  }, [status]);

  // Función para obtener lista de autos del backend
  // async function fetchAutos() {
  //   setLoading(true);
  //   setError("");
  //   try {
  //     const res = await fetch("/api/autos");
  //     if (!res.ok) throw new Error("Error al cargar autos");
  //     const data = await res.json();
  //     setAutos(data);
  //   } catch (err) {
  //     setError((err as Error).message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // manejar cambio de vista entre listado y formulario
  const handleViewChange = (newView: "list" | "form") => {
    setView(newView);
    if (newView === "list" && listRef.current) {
      // Hacer scroll a la lista si cambiamos a vista de listado
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler para inputs y textarea del formulario
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Enviar formulario para crear o editar auto según form.id
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.marca || !form.modelo || !form.year || !form.price) {
      setError("Por favor completá los campos obligatorios");
      return;
    }

    try {
      const body = {
        marca: form.marca,
        modelo: form.modelo,
        year: Number(form.year),
        km: Number(form.km) || 0,
        price: Number(form.price),
        isNew: form.isNew,
        fuelType: form.fuelType,
        imageUrl: form.imageUrl,
        images: JSON.parse(form.images),
        caracteristicas: JSON.parse(form.caracteristicas),
        equipamiento: JSON.parse(form.equipamiento),
        description: form.description || null,
      };

      let res: Response;

      if (form.id === 0) {
        // Crear auto nuevo
        res = await fetch("/api/autos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } else {
        // Editar auto existente
        res = await fetch("/api/autos", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...body, id: form.id }),
        });
      }

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Error al guardar el auto");
      }

      setSuccess(
        form.id === 0
          ? "Auto creado correctamente"
          : "Auto actualizado correctamente"
      );
      // Resetear formulario a modo creación
      setForm({
        id: 0,
        marca: "",
        modelo: "",
        year: "",
        km: "",
        price: "",
        isNew: false,
        fuelType: "",
        imageUrl: "",
        images: "[]",
        caracteristicas: "{}",
        equipamiento: "[]",
        description: "",
      });
      fetchAutos();
      setView("list"); // ✅ cambiás la vista
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: "smooth" }); // ✅ hacés scroll suave
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Cargar auto en formulario para editar
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = (auto: AdminAuto) => {
    setForm({
      id: auto.id,
      marca: auto.marca,
      modelo: auto.modelo,
      year: auto.year.toString(),
      km: auto.km.toString(),
      price: auto.price.toString(),
      isNew: auto.isNew,
      fuelType: auto.fuelType ?? "",
      imageUrl: auto.imageUrl ?? "",
      images: JSON.stringify(auto.images),
      caracteristicas: JSON.stringify(auto.caracteristicas),
      equipamiento: JSON.stringify(auto.equipamiento),
      description: auto.description || "",
    });
    setError("");
    setSuccess("");
  };

  // Eliminar auto con confirmación
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro que querés eliminar este auto?")) return;

    try {
      await deleteAuto(id); // ✅ usamos el hook
      setSuccess("Auto eliminado correctamente");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Mostrar loading si la sesión está cargando
  if (status === "loading") {
    return <p className="p-4">Cargando sesión...</p>;
  }

  // Mensaje si no está autenticado
  if (status === "unauthenticated") {
    return (
      <p className="p-4 text-red-600">
        No estás autorizado. Por favor inicia sesión.
      </p>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* sidebar lateral desktop */}
      <AdminSidebar
        userName={session?.user?.name ?? undefined}
        currentView={view}
        onChangeView={handleViewChange}
        onResetForm={() =>
          setForm({
            id: 0,
            marca: "",
            modelo: "",
            year: "",
            km: "",
            price: "",
            isNew: false,
            fuelType: "",
            imageUrl: "",
            images: "[]",
            caracteristicas: "{}",
            equipamiento: "[]",
            description: "",
          })
        }
      />

      {/* Contenido principal */}
      <main className="flex-grow p-6 overflow-auto">
        {/* contenedor de formulario, en grid dos columnas en desktop */}
        {success && <Alert type="success" message={success} />}
        {error && <Alert type="error" message={error} />}
        {view === "form" && (
          <AutoForm
            form={form}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}

        {/* Contenedor listado de autos */}
        {view === "list" && (
          <AutoList
            listRef={listRef}
            autos={autos}
            loading={loading}
            error={error}
            onEdit={(auto) => {
              setForm({
                id: auto.id,
                marca: auto.marca,
                modelo: auto.modelo,
                year: auto.year.toString(),
                km: auto.km.toString(),
                price: auto.price.toString(),
                isNew: auto.isNew,
                fuelType: auto.fuelType,
                imageUrl: auto.imageUrl,
                images: JSON.stringify(auto.images),
                caracteristicas: JSON.stringify(auto.caracteristicas),
                equipamiento: JSON.stringify(auto.equipamiento),
                description: auto.description || "",
              });
              handleViewChange("form");
            }}
            onDelete={handleDelete}
          />
        )}
      </main>
      {/* Menú inferior mobile */}
      <MobileNav
        currentView={view}
        onChangeView={handleViewChange}
        onResetForm={() =>
          setForm({
            id: 0,
            marca: "",
            modelo: "",
            year: "",
            km: "",
            price: "",
            isNew: false,
            fuelType: "",
            imageUrl: "",
            images: "[]",
            caracteristicas: "{}",
            equipamiento: "[]",
            description: "",
          })
        }
      />
    </div>
  );
}
