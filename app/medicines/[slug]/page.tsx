import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertTriangle,
  Clock,
  Droplets,
  FileWarning,
  Heart,
  Info,
  Pill,
  ShieldAlert,
  ThumbsDown,
  Users,
} from "lucide-react"

export default function MedicinePage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the medicine data based on the slug
  // For this example, we'll use a mock medicine object
  const medicine = getMedicineBySlug(params.slug)

  if (!medicine) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold">Medicine not found</h1>
        <p className="mt-4">The medicine you're looking for doesn't exist in our database.</p>
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
                      Medicines
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                      href={`/categories/${medicine.category.slug}`}
                      className="text-sm text-gray-500 hover:text-emerald-600"
                    >
                      {medicine.category.name}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm text-gray-700">{medicine.name}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">{medicine.name}</h1>
                    <p className="text-lg text-emerald-600 mt-1">{medicine.genericName}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {medicine.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="prose max-w-none">
                    <p>{medicine.description}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Pill className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium">Type</p>
                        <p className="text-sm text-gray-500">{medicine.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Users className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium">Age Group</p>
                        <p className="text-sm text-gray-500">{medicine.ageGroup}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm text-gray-500">{medicine.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Heart className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium">Prescription</p>
                        <p className="text-sm text-gray-500">
                          {medicine.prescription ? "Required" : "Over-the-counter"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="dosage" className="mt-8">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="dosage">Dosage</TabsTrigger>
                    <TabsTrigger value="side-effects">Side Effects</TabsTrigger>
                    <TabsTrigger value="warnings">Warnings</TabsTrigger>
                    <TabsTrigger value="pregnancy">Pregnancy</TabsTrigger>
                    <TabsTrigger value="storage">Storage</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dosage" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-emerald-600" />
                        Recommended Dosage
                      </h3>
                      <div className="prose max-w-none">
                        <p>{medicine.dosage.description}</p>

                        <h4 className="text-md font-medium mt-4">Adult Dosage:</h4>
                        <p>{medicine.dosage.adult}</p>

                        <h4 className="text-md font-medium mt-4">Pediatric Dosage:</h4>
                        <p>{medicine.dosage.pediatric}</p>

                        <h4 className="text-md font-medium mt-4">Elderly Dosage:</h4>
                        <p>{medicine.dosage.elderly}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="side-effects" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ThumbsDown className="h-5 w-5 text-emerald-600" />
                        Side Effects
                      </h3>
                      <div className="prose max-w-none">
                        <p>{medicine.sideEffects.description}</p>

                        <h4 className="text-md font-medium mt-4">Common Side Effects:</h4>
                        <ul>
                          {medicine.sideEffects.common.map((effect, index) => (
                            <li key={index}>{effect}</li>
                          ))}
                        </ul>

                        <h4 className="text-md font-medium mt-4">Rare Side Effects:</h4>
                        <ul>
                          {medicine.sideEffects.rare.map((effect, index) => (
                            <li key={index}>{effect}</li>
                          ))}
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
                          <p className="text-amber-800 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            <span className="font-medium">
                              Seek medical attention if you experience any severe side effects.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="warnings" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-emerald-600" />
                        Warnings & Precautions
                      </h3>
                      <div className="prose max-w-none">
                        <p>{medicine.warnings.description}</p>

                        <h4 className="text-md font-medium mt-4">Contraindications:</h4>
                        <ul>
                          {medicine.warnings.contraindications.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>

                        <h4 className="text-md font-medium mt-4">Drug Interactions:</h4>
                        <ul>
                          {medicine.warnings.drugInteractions.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>

                        <div className="bg-red-50 border border-red-200 rounded-md p-4 mt-4">
                          <p className="text-red-800 flex items-center gap-2">
                            <FileWarning className="h-5 w-5" />
                            <span className="font-medium">Overdose Information:</span>
                          </p>
                          <p className="text-red-800 mt-2">{medicine.warnings.overdose}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="pregnancy" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Info className="h-5 w-5 text-emerald-600" />
                        Pregnancy & Breastfeeding
                      </h3>
                      <div className="prose max-w-none">
                        <p>{medicine.pregnancy.description}</p>

                        <h4 className="text-md font-medium mt-4">Pregnancy Category:</h4>
                        <p>{medicine.pregnancy.category}</p>

                        <h4 className="text-md font-medium mt-4">During Pregnancy:</h4>
                        <p>{medicine.pregnancy.duringPregnancy}</p>

                        <h4 className="text-md font-medium mt-4">During Breastfeeding:</h4>
                        <p>{medicine.pregnancy.breastfeeding}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="storage" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Info className="h-5 w-5 text-emerald-600" />
                        Storage & Handling
                      </h3>
                      <div className="prose max-w-none">
                        <p>{medicine.storage.description}</p>

                        <h4 className="text-md font-medium mt-4">Storage Conditions:</h4>
                        <ul>
                          {medicine.storage.conditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                          ))}
                        </ul>

                        <h4 className="text-md font-medium mt-4">Shelf Life:</h4>
                        <p>{medicine.storage.shelfLife}</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {medicine.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="text-lg font-semibold mb-4">Alternative Medicines</h3>
                    <div className="space-y-4">
                      {medicine.alternatives.map((alt, index) => (
                        <Link key={index} href={`/medicines/${alt.slug}`} className="flex items-start gap-3 group">
                          <div className="w-12 h-12 rounded-md bg-emerald-100 flex items-center justify-center shrink-0">
                            <Pill className="h-6 w-6 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-emerald-600 transition-colors">{alt.name}</h4>
                            <p className="text-sm text-gray-500">{alt.genericName}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="text-lg font-semibold mb-4">Related Categories</h3>
                    <div className="space-y-2">
                      {medicine.relatedCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/categories/${category.slug}`}
                          className="block text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
                    <p className="text-sm text-gray-500">
                      The information provided is for educational purposes only and is not intended as a substitute for
                      medical advice from a qualified healthcare professional. Always consult your doctor or other
                      qualified health provider regarding any medical condition.
                    </p>
                  </div>
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

// Mock function to get medicine by slug
function getMedicineBySlug(slug: string) {
  // In a real application, this would fetch data from a database
  // For this example, we'll return a mock medicine object
  return {
    id: 1,
    name: "Paracetamol 500mg",
    slug: "paracetamol-500mg",
    genericName: "Paracetamol (Acetaminophen)",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain. At a standard dose, paracetamol only slightly decreases body temperature; it is inferior to ibuprofen in that respect, and the benefits of its use for fever are unclear. It may be used for the relief of mild to moderate pain such as headache, muscle aches, backache, and toothache.",
    type: "Tablet",
    ageGroup: "Adults and children over 12 years",
    duration: "Short-term use (3-5 days)",
    prescription: false,
    category: {
      name: "Pain Relief",
      slug: "pain-relief",
    },
    tags: ["Pain Relief", "Fever", "OTC", "Analgesic"],
    dosage: {
      description:
        "The recommended dose varies by age and condition. Always follow your doctor's instructions or the directions on the package.",
      adult: "1-2 tablets (500-1000mg) every 4-6 hours as needed, not exceeding 4000mg (8 tablets) in 24 hours.",
      pediatric:
        "For children 6-12 years: 250-500mg every 4-6 hours as needed, not exceeding 2000mg in 24 hours. Not recommended for children under 6 without medical advice.",
      elderly: "Same as adult dosage, but with caution. Elderly patients may be more susceptible to side effects.",
    },
    sideEffects: {
      description:
        "Paracetamol is generally well-tolerated when taken at recommended doses, but like all medications, it can cause side effects in some people.",
      common: ["Nausea", "Stomach pain", "Headache", "Dizziness"],
      rare: [
        "Allergic reactions (rash, itching, swelling)",
        "Unusual bleeding or bruising",
        "Yellowing of the skin or eyes (jaundice)",
        "Dark urine or clay-colored stools",
      ],
    },
    warnings: {
      description:
        "While generally safe when used as directed, paracetamol requires careful use to avoid potential serious complications.",
      contraindications: ["Hypersensitivity to paracetamol", "Severe liver disease", "Alcohol dependence"],
      drugInteractions: [
        "Warfarin (may increase anticoagulant effect)",
        "Certain anti-epileptic medications",
        "Metoclopramide (may increase paracetamol absorption)",
        "Regular alcohol consumption (increases risk of liver damage)",
      ],
      overdose:
        "Paracetamol overdose is potentially life-threatening and can cause severe liver damage. Symptoms may include nausea, vomiting, loss of appetite, and abdominal pain. Seek immediate medical attention if overdose is suspected.",
    },
    pregnancy: {
      description:
        "Paracetamol is often considered the pain reliever of choice during pregnancy and breastfeeding, but should still be used with caution.",
      category: "Category B (US FDA Pregnancy Category)",
      duringPregnancy:
        "Generally considered safe for use during pregnancy when used as directed for short periods. However, consult with your healthcare provider before use, especially for prolonged periods.",
      breastfeeding:
        "Paracetamol passes into breast milk in small amounts and is generally considered safe during breastfeeding when used as directed.",
    },
    storage: {
      description: "Proper storage ensures the medication remains effective and safe to use until its expiration date.",
      conditions: [
        "Store at room temperature (15-30°C or 59-86°F)",
        "Keep away from moisture and direct sunlight",
        "Keep out of reach of children",
        "Store in the original packaging until ready to use",
      ],
      shelfLife:
        "Usually 3 years from the date of manufacture when stored properly. Do not use after the expiration date printed on the package.",
    },
    faqs: [
      {
        question: "Can I take paracetamol with other medications?",
        answer:
          "Paracetamol can be taken with many other medications, but always check with your doctor or pharmacist first. Be particularly careful with other products that may contain paracetamol to avoid accidental overdose.",
      },
      {
        question: "Is paracetamol safe for long-term use?",
        answer:
          "Paracetamol is generally not recommended for long-term use without medical supervision. If you need pain relief for more than a few days, consult your healthcare provider.",
      },
      {
        question: "What's the difference between paracetamol and ibuprofen?",
        answer:
          "While both are pain relievers, they work differently. Paracetamol primarily reduces pain and fever, while ibuprofen reduces inflammation as well. Ibuprofen may cause more stomach-related side effects.",
      },
      {
        question: "Can I take paracetamol on an empty stomach?",
        answer:
          "Yes, paracetamol can be taken with or without food. Unlike some pain relievers like ibuprofen or aspirin, it's less likely to cause stomach irritation.",
      },
    ],
    alternatives: [
      {
        name: "Ibuprofen 400mg",
        slug: "ibuprofen-400mg",
        genericName: "Ibuprofen",
      },
      {
        name: "Aspirin 300mg",
        slug: "aspirin-300mg",
        genericName: "Acetylsalicylic Acid",
      },
      {
        name: "Naproxen 250mg",
        slug: "naproxen-250mg",
        genericName: "Naproxen Sodium",
      },
    ],
    relatedCategories: [
      {
        name: "Fever Reducers",
        slug: "fever-reducers",
      },
      {
        name: "Headache Relief",
        slug: "headache-relief",
      },
      {
        name: "Over-the-Counter",
        slug: "otc",
      },
    ],
  }
}
