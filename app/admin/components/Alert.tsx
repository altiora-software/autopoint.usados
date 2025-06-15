"use client";

interface AlertProps {
  type: "success" | "error";
  message: string;
}

export default function Alert({ type, message }: AlertProps) {
  const baseStyles = "mb-4 px-4 py-2 rounded text-sm font-medium";
  const colorStyles =
    type === "success"
      ? "bg-green-100 text-green-800 border border-green-300"
      : "bg-red-100 text-red-800 border border-red-300";

  return <div className={`${baseStyles} ${colorStyles}`}>{message}</div>;
}
