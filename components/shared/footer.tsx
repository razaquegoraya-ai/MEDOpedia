import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
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
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-emerald-600">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-600">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-600">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
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
                <li>
                  <Link href="#" className="text-gray-500 hover:text-emerald-600">
                    Side Effects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-emerald-600">
                    Dosage Guidelines
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
                  <Link href="#" className="text-gray-500 hover:text-emerald-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-emerald-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-emerald-600">
                    Partners
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
                <li>
                  <Link href="#" className="text-gray-500 hover:text-emerald-600">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-emerald-600">
                    Cookie Policy
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
  )
}
