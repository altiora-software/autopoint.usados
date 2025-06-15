"use client";

import { signOut } from "next-auth/react";

interface MobileNavProps {
  currentView: "list" | "form";
  onChangeView: (view: "list" | "form") => void;
  onResetForm: () => void;
}

export default function MobileNav({
  currentView,
  onChangeView,
  onResetForm,
}: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 flex justify-around items-center p-2 md:hidden z-50">
      <button
        onClick={() => onChangeView("list")}
        className={`px-4 py-2 rounded ${
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
        className={`px-4 py-2 rounded ${
          currentView === "form"
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
  );
}
