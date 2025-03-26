"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Triangle, FileText, Sparkles, CheckCircle, ArrowRight, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function LandingPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnectWallet = () => {
    setIsConnecting(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      // Use direct navigation instead of router.push
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Triangle className="h-5 w-5" />
            <span className="font-bold text-2xl">Refiner</span>
          </div>
          <div className="flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isConnecting ? (
                <span className="flex items-center">
                  <span className="mr-2 h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin"></span>
                  Connecting...
                </span>
              ) : (
                "Connect Wallet"
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Refine Your CV with{" "}
                  <span className="relative inline-block">
                    AI
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Upload your resume and let our AI analyze and refine it to make you stand out from the crowd
                </p>
                <Button
                  size="lg"
                  className="min-w-[200px] text-lg h-12 group bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                >
                  {isConnecting ? (
                    <span className="flex items-center">
                      <span className="mr-2 h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin"></span>
                      Connecting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="flex justify-center">
  <div className="relative w-full max-w-md aspect-square">
    {/* Background decoration (keep if you want the rotated effect) */}
    <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div>
    
    {/* Main image container with improved settings */}
    <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/img/cv.jpg" 
        alt="Professional CV Analysis"
        width={800}  // Increased from 100
        height={800} // Increased from 100
        priority    // Ensures high loading priority
        quality={100} // Maximum quality
        className="w-full h-full object-cover" // Changed from 'cover' to 'contain'
        style={{
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
        }}
      />
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Your CV</h3>
                <p className="text-muted-foreground">
                  Connect your wallet and upload your resume or CV in any common format
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your document for structure, content, and keyword optimization
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Refined Results</h3>
                <p className="text-muted-foreground">
                  Receive detailed feedback and suggestions to improve your CV&apos;s effectiveness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-primary/5 p-10 rounded-xl border">
              <h2 className="text-3xl font-bold mb-6">Ready to Refine Your CV?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Connect your wallet now and start improving your job application documents with AI
              </p>
              <Button
                size="lg"
                className="min-w-[200px] text-lg h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleConnectWallet}
                disabled={isConnecting}
              >
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Triangle className="h-4 w-4" />
              <span className="font-semibold">Refiner</span>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Refiner AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

