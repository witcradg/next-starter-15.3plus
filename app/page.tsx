"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logoipsum-404.png"
            alt="Starter Logo"
            width={120}
            height={120}
            priority
            className="rounded-full shadow-md"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Next.js Starter</h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground">
          This is a generic home page built with <span className="font-semibold">Next.js 15</span>, <span className="font-semibold">Tailwind CSS 4</span>, and <span className="font-semibold">shadcn/ui</span> components.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
              Next.js Docs
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
              Tailwind CSS Docs
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer">
              shadcn/ui Docs
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
