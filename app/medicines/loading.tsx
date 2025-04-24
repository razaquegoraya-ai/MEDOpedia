import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="MEDOpedia Logo"
            width={64}
            height={64}
            className="rounded-md"
          />
        </div>
        <h1 className="text-2xl font-bold">Loading Medicine Information...</h1>
        <p className="text-gray-500">Please wait while we fetch the medicine details for you.</p>
        <div className="mt-4">
          <div className="h-2 w-40 bg-emerald-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
