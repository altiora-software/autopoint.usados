"use client";

import { useSession, signOut } from "next-auth/react";

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="p-4">Cargando sesión...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <p className="p-4 text-red-600">
        No estás autorizado. Por favor inicia sesión.
      </p>
    );
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <p className="mb-4">Hola, {session?.user?.name}! Estás autenticado.</p>
      <button
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </main>
  );
}
