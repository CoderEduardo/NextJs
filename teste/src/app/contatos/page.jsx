'use client'
import { useEffect, useState } from "react"

export default function Contato(){

const [metodo, setMetodo] = useState("")

useEffect(()=>{
    fetch('/api/metodos')
    .then((res)=>res.json())
    .then((data)=> setMetodo(data.metodo))
})

return <h1>Contatos, e o método da api: {metodo}</h1>

}