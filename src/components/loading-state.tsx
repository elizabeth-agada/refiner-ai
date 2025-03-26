export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      <p className="mt-4 text-lg text-muted-foreground">Analyzing your document...</p>
    </div>
  )
}

