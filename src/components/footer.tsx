import { Triangle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <Triangle className="h-4 w-4" />
            <span className="font-semibold">Refiner</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Refiner AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

