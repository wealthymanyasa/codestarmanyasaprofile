import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const toastVariants = (() => {
  return {
    default: "bg-white text-gray-900",
    success: "bg-green-100 text-green-900 border-green-200",
    error: "bg-red-100 text-red-900 border-red-200",
    loading: "bg-blue-100 text-blue-900 border-blue-200",
  }
})()
