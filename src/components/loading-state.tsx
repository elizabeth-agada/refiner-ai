import { Search } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export function LoadingState() {
  return (
    <div className="bg-background rounded-lg p-8 text-center space-y-4">
      <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
        <Search className="w-12 h-12 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Analysing</h3>
        <p className="text-sm text-muted-foreground">
          Please wait while your document is being examined
        </p>
      </div>
      <Progress value={33} className="w-full max-w-md mx-auto" />
    </div>
  )
}

