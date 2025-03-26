import type React from "react"
interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`min-h-screen flex flex-col bg-background ${className}`}>{children}</div>
}

