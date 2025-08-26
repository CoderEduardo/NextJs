import { Header } from "@/components/header"
import { Metadata } from "next"
import Botao from "@/components/botao/botao"
import Link from "next/link"
import Image from "next/image"
import LikeButton from "@/components/LikeButton/LikeButton"

export const metadata: Metadata = {

  title: 'Home - Teste NextJs',
  description: "Aprendendo next Js",
  openGraph: {
    title: "Testando NextJs",
    description: "Aprendendo NextJs e testando ao mesmo tempo",
    url: 'https://meusite.com',
    siteName: 'Receitas',
    images: [
      {
        url: 'https://meusite.com/capa.png',
        width: 800,
        height: 600
      }
    ],
    locale: 'pt-BR',
    type: 'website'
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

async function getPosts(){
//simulação de fetch no servidor
return[
  {id:1, title:"Aprendendo Next.js"},
  {id:2, title:"React server components"}
]


}

export default async function Home() {

  const posts = await getPosts()

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
      {/*Imagens otimizadas*/}
      <Image
        src='/foto.png'
        alt="foto otimizada"
        width={500}
        height={300}
      />

      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title} <LikeButton/></li>
        ))}
      </ul>




    </div>

  )

}