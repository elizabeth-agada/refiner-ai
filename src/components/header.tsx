"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Triangle, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

interface HeaderProps {
  isWalletConnected?: boolean
}

export function Header({ isWalletConnected = false }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // This useEffect ensures hydration is complete before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnectWallet = () => {
    // Use direct navigation instead of router.push
    window.location.href = "/dashboard"
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Triangle className="h-5 w-5" />
          <span className="font-bold text-2xl">Refiner</span>
        </Link>
        <div className="flex items-center space-x-4">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {isWalletConnected ? (
            <Button variant="outline" className="text-sm">
              Wallet Connected
            </Button>
          ) : (
            <Button onClick={handleConnectWallet} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

