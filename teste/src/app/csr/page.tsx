"use client"

import { useEffect, useState } from "react"

export default function PostsCsr() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")     //consumindo a api
            .then(res => res.json())                            //transformando os dados em json
            .then(data => setPosts(data))                       //setando os dados na variável
    }, [])

    return (
        <div>
            <h1>Posts CSR</h1>
            <ul>
                {posts.map((p: any) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    )

}