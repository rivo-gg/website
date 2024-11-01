'use client'

import { ArrowLeft, Copy, Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const convertSvgToReact = (svg: string) => {
    if (!svg.trim()) return ""

    // Convert kebab-case to camelCase
    const converted = svg
      .replace(/data-([a-z])/g, (_, p1) => `data${p1.toUpperCase()}`)
      .replace(/([a-z])-([a-z])/g, (_, p1, p2) => p1 + p2.toUpperCase())
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule')
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/stroke-linecap/g, 'strokeLinecap')
      .replace(/stroke-linejoin/g, 'strokeLinejoin')
      .replace(/class=/g, 'className=')

    setOutput(converted)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/tools"
            className="mb-8 inline-flex items-center text-sm text-[#4F6BF6] hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tools
          </Link>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            SVG to React <span className="text-[#4F6BF6]">Optimizer</span>
          </h1>
          <p className="text-gray-400">
            Convert your SVG markup to React-compatible JSX with properly converted properties
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="input-svg" className="text-sm font-medium">Input SVG</label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => convertSvgToReact(input)}
                className="text-[#4F6BF6] hover:text-[#4F6BF6]/90"
              >
                Convert
              </Button>
            </div>
            <Textarea
              id="input-svg"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
              placeholder="Paste your SVG code here..."
              className="h-[400px] bg-[#242424] font-mono"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="output-jsx" className="text-sm font-medium">Output JSX</label>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="text-[#4F6BF6] hover:text-[#4F6BF6]/90"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const blob = new Blob([output], { type: 'text/plain' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'react-svg.jsx'
                    a.click()
                    URL.revokeObjectURL(url)
                  }}
                  className="text-[#4F6BF6] hover:text-[#4F6BF6]/90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            <Textarea
              id="output-jsx"
              value={output}
              readOnly
              placeholder="Converted React JSX will appear here..."
              className="h-[400px] bg-[#242424] font-mono"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

