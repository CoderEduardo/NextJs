export default function Login() {

    return (


        <div className="h-screen flex justify-center items-center">
            <main className="bg-black w-7xl h-160 text-white rounded-2xl">
                <h1 className="font-bold text-6xl p-10 pt-25">FAÇA SEU LOGIN</h1>
                <form action="">
                    <ul className="p-10">
                        <li className="font-extralight"><label className="text-2xl " htmlFor="">Email</label><br />
                            <input type="email" placeholder="Digite seu email" /></li>
                        <li>
                            <label htmlFor="" className="text-2xl">Senha</label><br />
                            <input type="password" placeholder="Digite a sua senha" /></li>
                    </ul>
                </form>
            </main>
        </div>

    )

}