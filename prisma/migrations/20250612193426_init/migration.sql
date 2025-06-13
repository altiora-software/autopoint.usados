-- CreateTable
CREATE TABLE "autos_usados" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,
    "price" BIGINT NOT NULL,
    "is_new" BOOLEAN NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "images" TEXT[],
    "caracteristicas" JSONB NOT NULL,
    "equipamiento" TEXT[],
    "description" TEXT,

    CONSTRAINT "autos_usados_pkey" PRIMARY KEY ("id")
);
