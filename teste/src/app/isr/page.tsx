export const revalidate = 60 //tempo em segundos

export default async function PostISR() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json()

    return (

        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((p: any) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>


    )

}