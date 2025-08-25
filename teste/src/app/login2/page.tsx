//navegação programática (useRouter)
/*Às vezes, você quer redirecionar via código, exemplo: depois do login -> enviar usuário para /dashboard*/

'use client'
import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Login2(){

    const router = useRouter()
    const {data:session} = useSession()

    function handleLogin(){
        
        if(session){
            return(
                <div>
                    <p>Logado com {session.user?.email}</p>
                    <button onClick={()=> signOut}>Sair</button>
                </div>
            )
        }

    }

    return (
        <div>
            <h2>Login</h2>
             <button onClick={()=> signIn('credentials', {email: "teste@exemplo.com", password:"1234"})}>Entrar</button>
        </div>
    )

}