"use client";

import { signOut } from "next-auth/react";

interface AdminSidebarProps {
  userName?: string;
  currentView: "list" | "form";
  onChangeView: (view: "list" | "form") => void;
  onResetForm: () => void;
}

export default function AdminSidebar({
  userName,
  currentView,
  onChangeView,
  onResetForm,
}: AdminSidebarProps) {
  return (
    <nav className="hidden md:flex flex-col justify-between w-64 border-r border-gray-300 p-4">
      <div className="space-y-4">
        <p>Hola, {userName}</p>

        <button
          onClick={() => onChangeView("list")}
          className={`w-full text-left px-4 py-2 rounded ${
            currentView === "list"
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
        >
          Ver Autos
        </button>

        <button
          onClick={() => {
            onResetForm();
            onChangeView("form");
          }}
          className={`w-full text-left px-4 py-2 border rounded ${
            currentView === "form"
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
  );
}
