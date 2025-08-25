//navegação programática (useRouter)
/*Às vezes, você quer redirecionar via código, exemplo: depois do login -> enviar usuário para /dashboard*/

'use client'
import { useRouter } from "next/navigation"

export default function Login2(){

    const router = useRouter()

    function handleLogin(){
        //logica do login
        router.push("/posts")
    }

    return <button onClick={handleLogin}>Entrar</button>

}