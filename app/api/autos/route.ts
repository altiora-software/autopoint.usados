import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions"; // Asegúrate de que la ruta sea correcta

// autos hardcodeados
// import autosData from "@/data/autos";
import { prisma } from "../../../prisma/prismaClient"; // Asegúrate de que la ruta sea correcta

import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

console.log("API OK");

export async function GET() {
  try {
    //para usar mock de datos
    // const autos = autosData; // Usa los datos hardcodeados
    const autos = await prisma.autos_usados.findMany();
    // Convierte BigInt a number
    const autosFormateados = autos.map((auto) => ({
      ...auto,
      price: Number(auto.price),
    }));
    // Formatear los datos para convertir BigInt a number
    return NextResponse.json(autosFormateados);
  } catch (error) {
    console.error("Error al obtener autos:", error);
    return NextResponse.json(
      { error: "Error al obtener los autos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const data = await request.json();
    // Validar campos mínimos aquí

    const nuevoAuto = await prisma.autos_usados.create({
      data: {
        marca: data.marca,
        modelo: data.modelo,
        year: data.year,
        km: data.km,
        price: BigInt(data.price),
        isNew: data.isNew,
        fuelType: data.fuelType,
        imageUrl: data.imageUrl,
        images: data.images,
        caracteristicas: data.caracteristicas,
        equipamiento: data.equipamiento,
        description: data.description || null,
      },
    });
    return NextResponse.json({
      ...nuevoAuto,
      price: Number(nuevoAuto.price), // Convertir BigInt a number
    });
  } catch (error) {
    console.error("Error creando auto:", error);
    return NextResponse.json({ error: "Error creando auto" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const data = await request.json();

    const updatedAuto = await prisma.autos_usados.update({
      where: { id: data.id },
      data: {
        marca: data.marca,
        modelo: data.modelo,
        year: data.year,
        km: data.km,
        price: BigInt(data.price),
        isNew: data.isNew,
        fuelType: data.fuelType,
        imageUrl: data.imageUrl,
        images: data.images,
        caracteristicas: data.caracteristicas,
        equipamiento: data.equipamiento,
        description: data.description || null,
      },
    });

    return NextResponse.json({
      ...updatedAuto,
      price: Number(updatedAuto.price), // Convertir BigInt a Number
    });
  } catch (error) {
    console.error("Error actualizando auto:", error);
    return NextResponse.json(
      { error: "Error actualizando auto" },
      { status: 500 }
    );
  }
}


export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const data = await request.json();
    if (!data.id)
      return NextResponse.json({ error: "ID requerido" }, { status: 400 });

    await prisma.autos_usados.delete({ where: { id: data.id } });
    return NextResponse.json({ message: "Auto eliminado correctamente" });
  } catch (error) {
    console.error("Error eliminando auto:", error);
    return NextResponse.json(
      { error: "Error eliminando auto" },
      { status: 500 }
    );
  }
}
