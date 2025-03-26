"use client"

import * as React from "react"

interface ToastOptions {
  title: string
  description: string
  variant?: "default" | "destructive"
}

interface ToastContextType {
  toast: (options: ToastOptions) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = React.useState<ToastOptions | null>(null)

  const showToast = (options: ToastOptions) => {
    setToast(options)
    const timer = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(timer)
  }

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      {toast && (
        <div className={`fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 ${
          toast.variant === 'destructive' 
            ? 'bg-red-500 text-white' 
            : 'bg-green-500 text-white'
        }`}>
          <h3 className="font-bold">{toast.title}</h3>
          <p className="text-sm">{toast.description}</p>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}