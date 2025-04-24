import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="MEDOpedia Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold tracking-tight">MEDOpedia</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">404</h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Page Not Found</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sorry, we couldn't find the page you're looking for.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="MEDOpedia Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <span className="text-xl font-bold tracking-tight">MEDOpedia</span>
              </Link>
              <p className="text-sm text-gray-500">Your comprehensive guide to medicines available across India.</p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      Medicine Database
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      Drug Interactions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="text-gray-500 hover:text-emerald-600">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-500 hover:text-emerald-600">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} MEDOpedia. All rights reserved.</p>
            <p className="mt-1">
              MEDOpedia is for informational purposes only. Always consult a healthcare professional for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
