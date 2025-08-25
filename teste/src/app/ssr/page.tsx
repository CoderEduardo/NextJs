//SSR, server side rendering

export default async function PostsSSR(){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache:'no-store',   //força o SSR: sempre busca no servidor
    })

    const posts = await res.json()

    return(
        <div>
            <h1>Posts SSR</h1>
            <ul>
                {posts.map((p:any)=>(
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>

    )

}