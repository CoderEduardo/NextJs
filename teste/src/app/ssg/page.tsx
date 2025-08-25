//SSG (static site generation)
/*A página é gerada uma vez no build e servida com html estático, muito rápido e ótimo para SEO, 
bom para conteúdo que muda pouco (blog, documentação)*/

export default async function PostSSG() {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return(

        <div>
            <h1>Posts SGG</h1>
            <ul>
                {posts.map((p:any) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>

    )

}
