import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {(toasts || []).map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm ${
            toast.variant === 'destructive' 
              ? 'bg-red-500 text-white' 
              : 'bg-white border text-gray-900'
          }`}
        >
          <div className="font-semibold">{toast.title}</div>
          {toast.description && (
            <div className="text-sm mt-1">{toast.description}</div>
          )}
        </div>
      ))}
    </div>
  )
}
