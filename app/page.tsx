import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to <span className="text-emerald-600">MEDOpedia</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Your comprehensive guide to medicines available across India
                </p>
              </div>
              <div className="w-full max-w-2xl space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for medicines, active ingredients, or conditions..."
                    className="w-full bg-white pl-8 shadow-md"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Medicine Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="tablet">Tablets</SelectItem>
                      <SelectItem value="capsule">Capsules</SelectItem>
                      <SelectItem value="syrup">Syrups</SelectItem>
                      <SelectItem value="injection">Injections</SelectItem>
                      <SelectItem value="topical">Topical</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="antibiotics">Antibiotics</SelectItem>
                      <SelectItem value="analgesics">Pain Relief</SelectItem>
                      <SelectItem value="antihypertensives">Blood Pressure</SelectItem>
                      <SelectItem value="antidiabetics">Diabetes</SelectItem>
                      <SelectItem value="antihistamines">Allergies</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Categories</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse medicines by their therapeutic categories
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center shadow-md transition-all hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{category.description}</p>
                  <div className="mt-4 text-emerald-600 group-hover:underline">Browse medicines</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Recently Added Medicines
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest additions to our database
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {recentMedicines.map((medicine) => (
                <Link
                  key={medicine.id}
                  href={`/medicines/${medicine.slug}`}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold">{medicine.name}</h3>
                  <p className="text-sm text-emerald-600 mt-1">{medicine.genericName}</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{medicine.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {medicine.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-emerald-600 group-hover:underline">View details</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
                  About MEDOpedia
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Your trusted source for medicine information in India
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  MEDOpedia provides comprehensive, accurate, and up-to-date information about medicines available
                  across India. Our mission is to empower patients and healthcare professionals with reliable drug
                  information.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-700"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Medical professionals using MEDOpedia"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
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
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
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
    </div>
  )
}

// Sample data for categories
const categories = [
  {
    id: 1,
    name: "Antibiotics",
    slug: "antibiotics",
    description: "Medicines that fight bacterial infections",
    icon: (props) => (
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
        {...props}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Pain Relief",
    slug: "pain-relief",
    description: "Medicines that alleviate pain and discomfort",
    icon: (props) => (
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
        {...props}
      >
        <path d="m8 2 1 13h6l1-13" />
        <path d="M13.8 8.8a2 2 0 0 0-3.6 0" />
        <path d="M7 17a5 5 0 0 0 10 0" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Diabetes",
    slug: "diabetes",
    description: "Medicines for managing blood sugar levels",
    icon: (props) => (
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
        {...props}
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="M8.5 15V9" />
        <path d="M15.5 9v6" />
        <path d="M12 12v3" />
        <path d="M12 9v.01" />
      </svg>
    ),
  },
]

// Sample data for recent medicines
const recentMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    slug: "paracetamol-500mg",
    genericName: "Paracetamol (Acetaminophen)",
    description:
      "Used to treat mild to moderate pain and reduce fever. Common brand names include Crocin, Dolo, and Calpol.",
    tags: ["Pain Relief", "Fever", "OTC"],
  },
  {
    id: 2,
    name: "Azithromycin 500mg",
    slug: "azithromycin-500mg",
    genericName: "Azithromycin",
    description:
      "An antibiotic used to treat a variety of bacterial infections including respiratory infections, skin infections, and ear infections.",
    tags: ["Antibiotic", "Prescription"],
  },
  {
    id: 3,
    name: "Metformin 500mg",
    slug: "metformin-500mg",
    genericName: "Metformin Hydrochloride",
    description:
      "First-line medication for the treatment of type 2 diabetes, particularly in people who are overweight or obese.",
    tags: ["Diabetes", "Prescription"],
  },
]
