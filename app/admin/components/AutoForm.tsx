"use client";

import React from "react";

interface AutoFormProps {
  form: {
    id: number;
    marca: string;
    modelo: string;
    year: string;
    km: string;
    price: string;
    isNew: boolean;
    fuelType: string;
    imageUrl: string;
    images: string;
    caracteristicas: string;
    equipamiento: string;
    description: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AutoForm({ form, onChange, onSubmit }: AutoFormProps) {
  return (
    <section className="max-w-4xl mx-auto border p-4">
      <h2>{form.id === 0 ? "Crear auto nuevo" : "Editar auto"}</h2>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        autoComplete="off"
      >
        {/* Campo marca */}
        <div>
          <label htmlFor="marca" className="font-medium block mb-1">
            Marca *
          </label>
          <input
            id="marca"
            name="marca"
            value={form.marca}
            onChange={onChange}
            required
            className="border p-2 rounded w-full"
            placeholder="Marca *"
          />
        </div>

        {/* Campo modelo */}
        <div>
          <label htmlFor="modelo" className="font-medium">
            Modelo *
          </label>
          <input
            id="modelo"
            name="modelo"
            value={form.modelo}
            onChange={onChange}
            required
            className="border p-2 rounded w-full"
            placeholder="Modelo *"
          />
        </div>

        {/* Campo año */}
        <div>
          <label htmlFor="year" className="font-medium">
            Año *
          </label>
          <input
            id="year"
            name="year"
            type="number"
            value={form.year}
            onChange={onChange}
            required
            className="border p-2 rounded w-full"
            placeholder="Año *"
          />
        </div>

        {/* Campo kilómetros */}
        <div>
          <label htmlFor="km" className="font-medium">
            Kilómetros
          </label>
          <input
            id="km"
            name="km"
            type="number"
            value={form.km}
            onChange={onChange}
            className="border p-2 rounded w-full"
            placeholder="Kilómetros"
          />
        </div>

        {/* Campo precio */}
        <div>
          <label htmlFor="price" className="font-medium">
            Precio *
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={form.price}
            onChange={onChange}
            required
            className="border p-2 rounded w-full"
            placeholder="Precio *"
          />
        </div>

        {/* Checkbox nuevo */}
        <div>
          <label htmlFor="isNew" className="flex items-center gap-2">
            <input
              id="isNew"
              name="isNew"
              type="checkbox"
              checked={form.isNew}
              onChange={onChange}
            />
            ¿Nuevo?
          </label>
        </div>

        {/* Más campos similares... */}
        <div>
          <label htmlFor="fuelType" className="font-medium">
            Tipo de combustible
          </label>
          <input
            id="fuelType"
            name="fuelType"
            value={form.fuelType}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="font-medium">
            URL imagen principal
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            value={form.imageUrl}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="images" className="font-medium">
            JSON imágenes
          </label>
          <textarea
            id="images"
            name="images"
            value={form.images}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="caracteristicas" className="font-medium">
            JSON características
          </label>
          <textarea
            id="caracteristicas"
            name="caracteristicas"
            value={form.caracteristicas}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="equipamiento" className="font-medium">
            JSON equipamiento
          </label>
          <textarea
            id="equipamiento"
            name="equipamiento"
            value={form.equipamiento}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="font-medium">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Botón de submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded w-full hover:bg-accent"
          >
            {form.id === 0 ? "Crear Auto" : "Guardar Cambios"}
          </button>
        </div>
      </form>
    </section>
  );
}
