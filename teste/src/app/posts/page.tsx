interface PostProps  {

    id: number,
    title: string,
    body: string,
    userId: number

}

interface ResponseProps {
    posts:PostProps[]
}

export default async function Posts(){

    const res = await fetch('https://dummyjson.com/posts')
    const data:ResponseProps = await res.json() 

    return(

        <div>

            {data.posts.map(post=>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}

        </div>

    )

}