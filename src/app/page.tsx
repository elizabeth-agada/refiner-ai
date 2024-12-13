'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sun, Moon, Triangle } from 'lucide-react'
import { useTheme } from "next-themes"
import { LoadingState } from '@/components/loading-state'
import { AnalysisResult } from '@/components/analysis-result'

export default function Page() {
  const [isDragActive, setIsDragActive] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const { theme, setTheme } = useTheme()
  
  const handleSubmit = async () => {
    setIsAnalyzing(true)
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsAnalyzing(false)
    setShowResult(true)
  }

  if (showResult) {
    return <AnalysisResult onReset={() => setShowResult(false)} />
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Triangle className="h-4 w-4" />
              <span className="font-semibold">Refiner</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="outline" className="text-sm">
                connect wallet
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <LoadingState />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Triangle className="h-5 w-5" />
            <span className="font-bold text-2xl">Refiner</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline" className={`${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}>
              connect wallet
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">
            Hello! I&apos;m here to help you boost
          </h1>
          <p className="text-2xl font-semibold">
            your resume and cv quality
          </p>
        </div>

        <div 
          className={`
            border-2 border-dashed rounded-lg p-8 mb-8 text-center
            ${isDragActive ? 'border-primary' : 'border-muted'}
          `}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragActive(true)
          }}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={(e) => {
            e.preventDefault()
            setIsDragActive(false)
            // Handle file drop here
          }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Upload your CVs, resumes, and
            <br />
            cover letters
          </p>
          <Button variant="secondary" className="text-xs">
            Upload document to begin
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Job Role:</label>
            <Input 
              placeholder="Describe your role you're applying in your CV"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Experience Level</label>
            <Select defaultValue="entry">
              <SelectTrigger>
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry level</SelectItem>
                <SelectItem value="mid">Mid level</SelectItem>
                <SelectItem value="senior">Senior level</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            className="w-full"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </main>
    </div>
  )
}
