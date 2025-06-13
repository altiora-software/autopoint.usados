import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const autos = await prisma.autos_usados.findMany();
    // Convierte BigInt a number
    const autosFormateados = autos.map((auto) => ({
      ...auto,
      price: Number(auto.price),
    }));
    return NextResponse.json(autosFormateados);
  } catch (error) {
    console.error("Error al obtener autos:", error);
    return NextResponse.json(
      { error: "Error al obtener los autos" },
      { status: 500 }
    );
  }
}
