import CryptoBubbles from "@/components/crypto-bubbles"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto px-4 py-2">
        <CryptoBubbles />
      </div>
    </main>
  )
}

