export interface Caracteristicas {
  motor?: string;
  transmision?: string;
  traccion?: string;
  puertas?: number;
  asientos?: number;
  color?: string;
  patente?: string;
}

export interface Auto {
  id: string | number;
  marca: string;
  modelo: string;
  year: number;
  km: number;
  price: number;
  isNew: boolean;
  fuelType?: string;
  transmission?: string;
  imageUrl?: string; // Imagen principal
  images?: string[]; // Array de imágenes para galería
  description?: string;
  caracteristicas?: Caracteristicas;
  equipamiento?: string[];
}
