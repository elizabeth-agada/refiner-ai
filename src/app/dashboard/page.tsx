"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sun, Moon, Triangle, Upload } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function DashboardPage() {
  const [isDragActive, setIsDragActive] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const allowedTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      '.pdf',
      '.doc',
      '.docx'
    ]
    
    const isValidType = allowedTypes.includes(file.type) || 
                       ['.pdf', '.doc', '.docx'].some(ext => file.name.toLowerCase().endsWith(ext))
    
    if (!isValidType) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or Word document",
        variant: "destructive"
      })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Maximum file size is 5MB",
        variant: "destructive"
      })
      return
    }

    setSelectedFile(file)
    toast({
      title: "File Selected",
      description: file.name,
      variant: "default"
    })
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragActive(false)
    
    const file = e.dataTransfer.files[0]
    if (!file) return

    const allowedTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      '.pdf',
      '.doc',
      '.docx'
    ]
    
    const isValidType = allowedTypes.includes(file.type) || 
                       ['.pdf', '.doc', '.docx'].some(ext => file.name.toLowerCase().endsWith(ext))
    
    if (!isValidType) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or Word document",
        variant: "destructive"
      })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Maximum file size is 5MB",
        variant: "destructive"
      })
      return
    }

    setSelectedFile(file)
    toast({
      title: "File Selected",
      description: file.name,
      variant: "default"
    })
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No File Selected",
        description: "Please upload a CV before submitting",
        variant: "destructive"
      })
      return
    }

    setIsAnalyzing(true)
    try {
      const formData = new FormData()
      formData.append('cv', selectedFile)

      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      toast({
        title: "CV Uploaded",
        description: "Your CV is being analyzed",
        variant: "default"
      })
    } catch {
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your CV",
        variant: "destructive"
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Triangle className="h-5 w-5" />
            <span className="font-bold text-2xl">Refiner</span>
          </Link>
          <div className="flex items-center space-x-4">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button variant="outline" className="text-sm">
              Wallet Connected
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Hello! I&apos;m here to help you boost</h1>
          <p className="text-2xl font-semibold">your resume and cv quality</p>
        </div>

        <div
          className={`
            border-2 border-dashed rounded-lg p-8 mb-8 text-center
            ${isDragActive ? "border-primary" : "border-muted"}
          `}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragActive(true)
          }}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            id="cv-upload" 
            className="hidden" 
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
          <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
            <Upload className="h-8 w-8 mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              {selectedFile 
                ? `Selected: ${selectedFile.name}` 
                : "Drag & drop or click to browse"}
            </p>
            <Button variant="secondary" className="text-xs">
              {selectedFile ? "Change File" : "Select File"}
            </Button>
          </label>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Job Role:</label>
            <Input placeholder="Describe the role you're applying for" className="w-full" />
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
            disabled={isAnalyzing}
          >
            {isAnalyzing ? "Analyzing..." : "Submit"}
          </Button>
        </div>
      </main>
    </div>
  )
}