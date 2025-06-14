"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRef } from "react";


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

export default function AdminPage() {
  const { data: session, status } = useSession();

  // estado para cambiar entre vista listado y formulario
  const [view, setView] = useState<"list" | "form">("list");

  // referencia para hacer scroll a lista en mobile
  const listRef = useRef<HTMLUListElement | null>(null);

  const [autos, setAutos] = useState<Auto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
  async function fetchAutos() {
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
  }

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
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Cargar auto en formulario para editar
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = (auto: Auto) => {
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
    setError("");
    setSuccess("");
  };

  // Eliminar auto con confirmación
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro que querés eliminar este auto?")) return;

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
      setSuccess("Auto eliminado correctamente");
      fetchAutos();
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
      <nav className="hidden md:flex flex-col justify-beween w-64  border-r border-gray-300 p-4">
        <div className="space-y-4">
          <p>Hola, {session?.user?.name}</p>
          <button
            onClick={() => handleViewChange("list")}
            className={`w-full text-left px-4 py-2 rounded ${
              view === "list"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            Ver Autos
          </button>
          <button
            onClick={() => {
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
              handleViewChange("form");
            }}
            className={`w-full text-left px-4 py-2 border rounded ${
              view === "form"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            Crear Auto
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className="w-full text-left px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Salir 🔒
          </button>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow p-6 overflow-auto">
        {/* contenedor de formulario, en grid dos columnas en desktop */}
        {view === "form" && (
          <section className="max-w-4xl mx-auto border p-4">
            <h2>{form.id === 0 ? "Crear auto nuevo" : "Editar auto"}</h2>
            {/* Aquí ponés tu formulario con grid dos columnas */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              autoComplete="off"
            >
              {/* Ejemplo campo marca */}
              <div>
                <label htmlFor="marca" className="font-medium block mb-1">
                  Marca *
                </label>
                <input
                  id="marca"
                  name="marca"
                  placeholder="Marca *"
                  value={form.marca}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, marca: e.target.value }))
                  }
                  required
                  className="border p-2 rounded w-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Ejemplo campo modelo */}
              <div>
                <label htmlFor="modelo" className="font-medium">
                  Modelo *
                </label>
                <input
                  id="modelo"
                  type="text"
                  name="modelo"
                  placeholder="Modelo *"
                  value={form.modelo}
                  onChange={handleInputChange}
                  required
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo year */}
              <div>
                <label htmlFor="year" className="font-medium">
                  Año *
                </label>
                <input
                  id="year"
                  type="number"
                  name="year"
                  placeholder="Año *"
                  value={form.year}
                  onChange={handleInputChange}
                  required
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo kilometros */}
              <div>
                <label htmlFor="km" className="font-medium">
                  Kilómetros
                </label>
                <input
                  id="km"
                  type="number"
                  name="km"
                  placeholder="Kilómetros"
                  value={form.km}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo price */}
              <div>
                <label htmlFor="price" className="font-medium">
                  Precio *
                </label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Precio *"
                  value={form.price}
                  onChange={handleInputChange}
                  required
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo es nuevo? */}
              <div>
                <label className="flex items-center gap-2" htmlFor="isNew">
                  <input
                    id="isNew"
                    type="checkbox"
                    name="isNew"
                    checked={form.isNew}
                    onChange={handleInputChange}
                  />
                  ¿Nuevo?
                </label>
              </div>
              {/* Ejemplo campo Tipo de combustible */}
              <div>
                <label htmlFor="fuelType" className="font-medium">
                  Tipo de combustible
                </label>
                <input
                  id="fuelType"
                  type="text"
                  name="fuelType"
                  placeholder="Tipo de combustible"
                  value={form.fuelType}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo url principal */}
              <div>
                <label htmlFor="imageUrl" className="font-medium">
                  URL imagen principal
                </label>
                <input
                  id="imageUrl"
                  type="text"
                  name="imageUrl"
                  placeholder="URL imagen principal"
                  value={form.imageUrl}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo JSON imágenes */}
              <div>
                <label htmlFor="images" className="font-medium">
                  JSON imágenes (ej. [])
                </label>
                <textarea
                  id="images"
                  name="images"
                  placeholder="JSON imágenes (ej. [])"
                  value={form.images}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo JSON características */}
              <div>
                <label htmlFor="caracteristicas" className="font-medium">
                  JSON características
                </label>
                <textarea
                  id="caracteristicas"
                  name="caracteristicas"
                  placeholder="JSON características"
                  value={form.caracteristicas}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo equipamiento */}
              <div>
                <label htmlFor="equipamiento" className="font-medium">
                  JSON equipamiento
                </label>
                <textarea
                  id="equipamiento"
                  name="equipamiento"
                  placeholder="JSON equipamiento"
                  value={form.equipamiento}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Ejemplo campo Descripción */}
              <div>
                <label htmlFor="description" className="font-medium">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Descripción"
                  value={form.description}
                  onChange={handleInputChange}
                  className="border p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Botón submit ocupando dos columnas */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-primary text-white py-2 rounded hover:bg-accent w-full"
                >
                  {form.id === 0 ? "Crear Auto" : "Guardar Cambios"}
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Contenedor listado de autos */}
        {view === "list" && (
          <section
            ref={listRef}
            className="max-w-4xl mx-auto"
            aria-label="Listado de autos"
          >
            <h2 className="text-2xl font-semibold mb-4">Listado de Autos</h2>
            {loading && <p>Cargando autos...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && autos.length === 0 && <p>No hay autos cargados.</p>}
            <ul className="space-y-3 ">
              {autos.map((auto) => (
                <li
                  key={auto.id}
                  className="border p-3 rounded flex justify-between items-center hover:shadow-md hover:shadow-white hover:transition-opacity  "
                >
                  <div>
                    <p>
                      <strong>{auto.marca}</strong> {auto.modelo} ({auto.year})
                      - ${auto.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <button
                      onClick={() => {
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
                      className="text-black bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "¿Estás seguro que querés eliminar este auto?"
                          )
                        ) {
                          fetch("/api/autos", {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: auto.id }),
                          })
                            .then((res) => {
                              if (!res.ok) throw new Error("Error al eliminar");
                              fetchAutos();
                            })
                            .catch((err) => alert(err.message));
                        }
                      }}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      {/* Menú inferior mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 flex justify-around items-center p-2 md:hidden">
        <button
          onClick={() => handleViewChange("list")}
          className={`px-4 py-2 rounded ${
            view === "list"
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
        >
          Ver Autos
        </button>
        <button
          onClick={() => {
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
            handleViewChange("form");
          }}
          className={`px-4 py-2 rounded ${
            view === "form"
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
        >
          Crear Auto
        </button>
        <button
          onClick={() => signOut({ callbackUrl: "/auth/signin" })}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Salir 🔒
        </button>
      </nav>
    </div>
  );
}
