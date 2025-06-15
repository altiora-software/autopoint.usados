import type { Auto as BaseAuto } from "@/types/auto";

export type AdminAuto = BaseAuto & {
  id: number;
  fuelType: string;
  imageUrl: string;
  images: string[];
  caracteristicas: Record<string, unknown>;
  equipamiento: string[];
};
