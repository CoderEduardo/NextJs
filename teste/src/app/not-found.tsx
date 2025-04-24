import Link from "next/link"

export default function NotFound(){

    return(

        <div>
            <h2>Essa página não foi encontrada</h2>
            <Link href={"/"}>Voltar para Home</Link>         
        </div>

    )

}