import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string) {
  console.log(price);
  if (price === null) return price;

  const priceStr = price.toString();

  const parts = priceStr.split(".");

  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (parts.length > 1) return integerPart + "." + parts[1];

  return integerPart;
}
