import { Header } from "@/components/header"
import { Metadata } from "next"

export const metadata: Metadata = {

  title: 'Home - Teste NextJs',
  description: "Aprendendo next Js",
  openGraph: {
    title: "Testando NextJs",
    description: "Aprendendo NextJs e testando ao mesmo tempo",
    images: ['']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }

}

export default function Home() {
  return (
    <div>
      <Header />
      <h2>Olá mundo</h2>
    </div>

  )

}