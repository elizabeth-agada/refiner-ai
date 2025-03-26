"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface WalletConnectProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  onConnect?: () => void
}

export function WalletConnect({
  variant = "outline",
  size = "default",
  className = "",
  onConnect,
}: WalletConnectProps) {
  const router = useRouter()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)

    try {
      // Here you would implement your actual wallet connection logic
      // For example with ethers.js or web3.js
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating connection

      // Call the onConnect callback if provided
      if (onConnect) {
        onConnect()
      } else {
        // Default behavior: redirect to dashboard
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleConnect} disabled={isConnecting}>
      {isConnecting ? (
        <span className="flex items-center">
          <span className="mr-2 h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin"></span>
          Connecting...
        </span>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  )
}

