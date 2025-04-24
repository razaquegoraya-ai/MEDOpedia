import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
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
  )
}
