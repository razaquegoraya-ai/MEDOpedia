import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/contact" className="text-sm font-medium text-emerald-600 underline underline-offset-4">
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
                  Get in <span className="text-emerald-600">Touch</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Have questions about medicines or want to provide feedback? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                  <p className="text-gray-500 mt-2">
                    Our team is ready to assist you with any questions or concerns you may have about medicines or our
                    platform.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 shrink-0">
                      <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-500">info@medopedia.in</p>
                      <p className="text-sm text-gray-500">support@medopedia.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 shrink-0">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-gray-500">+91 1234 567 890</p>
                      <p className="text-sm text-gray-500">+91 9876 543 210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 shrink-0">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-gray-500">
                        MEDOpedia Headquarters
                        <br />
                        123 Health Avenue, Medical District
                        <br />
                        New Delhi, 110001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 shrink-0">
                      <Clock className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-sm text-gray-500">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Connect with us</h3>
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
                    <Link href="#" className="text-gray-500 hover:text-emerald-600">
                      <span className="sr-only">LinkedIn</span>
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Send us a Message</h2>
                  <p className="text-gray-500 mt-2">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter the subject of your message" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about MEDOpedia and our services.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-4 mt-8">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </div>
              ))}
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
    </div>
  )
}

// Sample FAQs data
const faqs = [
  {
    question: "How accurate is the information on MEDOpedia?",
    answer:
      "All information on MEDOpedia is reviewed by qualified healthcare professionals including doctors and pharmacists. We regularly update our database to ensure accuracy and relevance. However, MEDOpedia should not replace professional medical advice.",
  },
  {
    question: "Is MEDOpedia available in languages other than English?",
    answer:
      "Currently, MEDOpedia is available only in English. However, we are working on adding support for multiple Indian languages to make our platform more accessible to everyone across India.",
  },
  {
    question: "How can I report incorrect information on MEDOpedia?",
    answer:
      "If you find any information that you believe is incorrect, please use our contact form or email us at support@medopedia.in. Our team will review your feedback and make necessary corrections.",
  },
  {
    question: "Can I contribute to MEDOpedia as a healthcare professional?",
    answer:
      "Yes, we welcome contributions from qualified healthcare professionals. Please contact us with your credentials and areas of expertise, and our team will get in touch with you regarding potential collaboration.",
  },
  {
    question: "Is MEDOpedia available as a mobile app?",
    answer:
      "We are currently developing mobile applications for both Android and iOS platforms. In the meantime, our website is fully responsive and can be accessed from any mobile device.",
  },
]
