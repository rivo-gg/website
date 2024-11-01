'use client'

import { ArrowRight, FileCode2, Image, Tags } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <main className="container mx-auto px-4 py-16">
      <div className="w-full mx-auto max-w-7xl mt-8">
      <h1 className="text-4xl font-bold text-primary flex justify-center">
        Tools
      </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A collection of tools to help developers streamline their workflow and boost productivity
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/tools/svg-optimizer"
            className="group relative overflow-hidden rounded-lg bg-[#242424] p-6 transition-all hover:bg-[#2A2A2A]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6BF6]/10">
              <FileCode2 className="h-6 w-6 text-[#4F6BF6]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">SVG Optimizer</h3>
            <p className="mb-4 text-sm text-gray-400">
              Convert and optimize SVGs for React components with automatic property conversion
            </p>
            <div className="flex items-center text-[#4F6BF6]">
              <span className="text-sm">Try it out</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/tools/meta-tags"
            className="group relative overflow-hidden rounded-lg bg-[#242424] p-6 transition-all hover:bg-[#2A2A2A]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6BF6]/10">
              <Tags className="h-6 w-6 text-[#4F6BF6]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Meta Tag Generator</h3>
            <p className="mb-4 text-sm text-gray-400">
              Generate meta tags for better SEO and social media sharing
            </p>
            <div className="flex items-center text-[#4F6BF6]">
              <span className="text-sm">Try it out</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/tools/image-optimizer"
            className="group relative overflow-hidden rounded-lg bg-[#242424] p-6 transition-all hover:bg-[#2A2A2A]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6BF6]/10">
              <Image className="h-6 w-6 text-[#4F6BF6]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Image Optimizer</h3>
            <p className="mb-4 text-sm text-gray-400">
              Optimize and compress images for better web performance
            </p>
            <div className="flex items-center text-[#4F6BF6]">
              <span className="text-sm">Try it out</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
