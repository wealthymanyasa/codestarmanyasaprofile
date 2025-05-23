import { useEffect } from "react"
import { useToast } from "./hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-0 z-[100] flex w-full flex-col items-center space-y-4 p-4 sm:right-0 sm:top-0 sm:items-end">
      {toasts.map(({ id, title, description, variant, action }) => (
        <div
          key={id}
          className={`flex w-full max-w-md items-start justify-between rounded-lg border p-4 shadow-lg transition-all ${
            variant === "destructive"
              ? "border-red-200 bg-red-50 text-red-900"
              : variant === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : variant === "loading"
              ? "border-blue-200 bg-blue-50 text-blue-900"
              : "border-gray-200 bg-white text-gray-900"
          }`}
        >
          <div className="flex-1">
            {title && <p className="font-medium">{title}</p>}
            {description && (
              <p className="text-sm text-opacity-80">{description}</p>
            )}
            {action && <div className="mt-2">{action}</div>}
          </div>
          <button
            onClick={() => dismiss(id)}
            className="ml-4 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
