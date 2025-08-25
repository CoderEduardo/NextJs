import { Header } from "@/components/header"
import { Metadata } from "next"
import Botao from "@/components/botao/botao"
import Link from "next/link"

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
      <Botao />
      <br />
      <Link href="/sobre" >Ir para a página sobre</Link>

      <section className="bg-blue-500 text-white p-10 rounded-b-xl">
        <h1 className="text-3xl font-bold">Bem vindo ao site</h1>
        <p className="mt-2 text-lg">Next.js com Tailwind é top</p>
      </section>

    </div>

  )

}