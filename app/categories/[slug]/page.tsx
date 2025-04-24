import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pill, Search } from "lucide-react"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the category data based on the slug
  // For this example, we'll use a mock category object
  const category = getCategoryBySlug(params.slug)

  if (!category) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <p className="mt-4">The category you're looking for doesn't exist in our database.</p>
        <Link
          href="/"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-700"
        >
          Return to Home
        </Link>
      </div>
    )
  }

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
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col gap-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-sm text-gray-500 hover:text-emerald-600">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/categories" className="text-sm text-gray-500 hover:text-emerald-600">
                      Categories
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold">{category.name}</h1>
                <p className="text-gray-500 mt-2">{category.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 space-y-6">
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-medium">Filter Results</h3>
                  <div className="space-y-2">
                    <label htmlFor="search" className="text-sm font-medium">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="search" type="search" placeholder="Search in this category..." className="pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Medicine Type</h4>
                    <div className="space-y-1">
                      {medicineTypes.map((type) => (
                        <div key={type.value} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`type-${type.value}`}
                            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          />
                          <label htmlFor={`type-${type.value}`} className="text-sm text-gray-600">
                            {type.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Prescription</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="prescription-required"
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                        />
                        <label htmlFor="prescription-required" className="text-sm text-gray-600">
                          Prescription Required
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="otc"
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                        />
                        <label htmlFor="otc" className="text-sm text-gray-600">
                          Over-the-counter
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Apply Filters</Button>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-medium">Related Categories</h3>
                  <div className="space-y-2">
                    {category.relatedCategories.map((relatedCategory) => (
                      <Link
                        key={relatedCategory.slug}
                        href={`/categories/${relatedCategory.slug}`}
                        className="block text-gray-700 hover:text-emerald-600 transition-colors"
                      >
                        {relatedCategory.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.medicines.map((medicine) => (
                    <Link
                      key={medicine.id}
                      href={`/medicines/${medicine.slug}`}
                      className="group border rounded-lg p-4 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-md bg-emerald-100 flex items-center justify-center shrink-0">
                          <Pill className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-emerald-600 transition-colors">
                            {medicine.name}
                          </h3>
                          <p className="text-sm text-emerald-600">{medicine.genericName}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">{medicine.description}</p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {medicine.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-gray-50"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      3
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
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
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
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

// Mock function to get category by slug
function getCategoryBySlug(slug: string) {
  // In a real application, this would fetch data from a database
  // For this example, we'll return a mock category object
  return {
    id: 1,
    name: "Pain Relief",
    slug: "pain-relief",
    description: "Medicines used to alleviate pain and discomfort, ranging from mild to severe.",
    relatedCategories: [
      {
        name: "Fever Reducers",
        slug: "fever-reducers",
      },
      {
        name: "Anti-inflammatory",
        slug: "anti-inflammatory",
      },
      {
        name: "Muscle Relaxants",
        slug: "muscle-relaxants",
      },
      {
        name: "Headache Relief",
        slug: "headache-relief",
      },
    ],
    medicines: [
      {
        id: 1,
        name: "Paracetamol 500mg",
        slug: "paracetamol-500mg",
        genericName: "Paracetamol (Acetaminophen)",
        description:
          "Used to treat mild to moderate pain and reduce fever. Common brand names include Crocin, Dolo, and Calpol.",
        tags: ["Fever", "OTC"],
      },
      {
        id: 2,
        name: "Ibuprofen 400mg",
        slug: "ibuprofen-400mg",
        genericName: "Ibuprofen",
        description:
          "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.",
        tags: ["NSAID", "OTC"],
      },
      {
        id: 3,
        name: "Diclofenac 50mg",
        slug: "diclofenac-50mg",
        genericName: "Diclofenac Sodium",
        description:
          "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and inflammatory conditions such as arthritis.",
        tags: ["NSAID", "Prescription"],
      },
      {
        id: 4,
        name: "Aspirin 300mg",
        slug: "aspirin-300mg",
        genericName: "Acetylsalicylic Acid",
        description:
          "Used to treat pain, fever, and inflammation. It also has blood-thinning properties and can be used to prevent heart attacks and strokes in certain patients.",
        tags: ["NSAID", "OTC"],
      },
      {
        id: 5,
        name: "Naproxen 250mg",
        slug: "naproxen-250mg",
        genericName: "Naproxen Sodium",
        description:
          "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, and fever.",
        tags: ["NSAID", "Prescription"],
      },
      {
        id: 6,
        name: "Tramadol 50mg",
        slug: "tramadol-50mg",
        genericName: "Tramadol Hydrochloride",
        description: "An opioid pain medication used to treat moderate to moderately severe pain.",
        tags: ["Opioid", "Prescription"],
      },
    ],
  }
}

// Medicine types for filter
const medicineTypes = [
  { value: "tablet", label: "Tablets" },
  { value: "capsule", label: "Capsules" },
  { value: "syrup", label: "Syrups" },
  { value: "injection", label: "Injections" },
  { value: "topical", label: "Topical" },
  { value: "drops", label: "Drops" },
]
