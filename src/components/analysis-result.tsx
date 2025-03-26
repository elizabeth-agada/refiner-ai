"use client"

import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Edit, LayoutGrid, Square, Tag, Type, Circle, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AnalysisResultProps {
  onReset: () => void
}

export function AnalysisResult({ onReset }: AnalysisResultProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="grid gap-6">
        {/* Score Card */}
        <Card className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative w-32 h-32">
              <div className="w-full h-full rounded-full border-8 border-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">80%</div>
                    <div className="text-sm text-muted-foreground">found</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Document State (AI naming)</h2>
              <p className="text-muted-foreground">
                Summary: A well-structured document with notable AI CV expert findings and completeness. Example:
                &quot;Your CV demonstrates strong technical expertise but lacks specific details on achievements in
                previous roles.&quot;
              </p>
            </div>
          </div>
        </Card>

        {/* Structural Analysis */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Structural Analysis</h2>
          <p className="text-muted-foreground mb-6">
            Your CV is well-structured, but the Work Experience section could be more detailed and The ai explains
            what&apos;s wrong with the above and how the fault result in the scale giving...
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Formatting</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Readability</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>section organization</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Skills and Keywords */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Skills Evaluation</h2>
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24">
                <div className="w-full h-full rounded-full border-8 border-orange-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold">8/10</div>
                      <div className="text-xs text-muted-foreground">rating</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Compare CV skills with job requirements. Example: &quot;Your CV highlights 8/10 required skills for
                  the target role. Missing skills include Python and project management&quot;
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Keyword Analysis</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Matching Keywords</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                Identify keywords from the CV that align with the target job description.
                <br />
                <br />
                Example: &quot;Your CV includes 75% of the relevant keywords for &apos;Data Analyst&apos; roles, such as
                &apos;data visualization&apos; and &apos;SQL&apos;, but lacks &apos;predictive analytics&apos; and
                &apos;R insights&apos;&quot;
              </p>
            </div>
          </Card>
        </div>

        {/* Content Review */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Content Review</h2>
          <div className="text-muted-foreground">
            <p className="font-medium mb-2">
              General Summary: AI-generated insights that assess the CV&apos;s overall content quality. Example:
            </p>
            <p className="text-sm">
              &quot;Your CV effectively highlights your key skills but lacks quantified achievements. Consider adding
              metrics such as revenue growth, cost reduction, or team leadership.&quot;
            </p>
          </div>
        </Card>

        {/* Bottom Toolbar */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
          <div className="bg-secondary rounded-lg shadow-lg p-2 flex items-center gap-2">
            <button className="p-2 hover:bg-background rounded">
              <Edit className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <Square className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <Tag className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <Type className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <Circle className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <Users className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-background rounded">
              <Code className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <Button onClick={onReset} className="mt-8">
        Start Over
      </Button>
    </div>
  )
}

