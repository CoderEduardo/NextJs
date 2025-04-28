export default function Login({ erroLogin = '' }) {

    return (


        <div className="h-screen flex justify-center items-center">
            {erroLogin && <p style={{ color: 'red' }}>{erroLogin}</p>} {/*Mensagem de erro*/}
            <main className="bg-black w-7xl h-160 text-white rounded-2xl">
                <h1 className="font-bold text-6xl p-10 pt-25">FAÇA SEU LOGIN</h1>
                <form method="POST" action="/api/login">
                    <ul className="p-10">
                        <li className="font-extralight"><label className="text-2xl " htmlFor="">Email</label><br />
                            <input type="email" name="email" required className="w-72" placeholder="Digite seu email" /></li>
                        <li>
                            <label htmlFor="" className="text-2xl">Senha</label><br />
                            <input type="password" name="senha" required className="w-72" placeholder="Digite a sua senha" /></li>
                    </ul>
                </form>
            </main>
        </div>

    )

}