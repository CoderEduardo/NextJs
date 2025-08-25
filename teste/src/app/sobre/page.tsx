export default async function sobre() {

    const res = await fetch('http://localhost:3000/api/hello')
    const mensagem = await res.json()

    return (
        <div>
            <h1>Página sobre</h1>
            <p>Mensagem da api Hello: {mensagem.message}</p>
        </div>
    )
}