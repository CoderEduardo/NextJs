import {prisma} from '../../../../lib/prisma'

//crud com prisma

//criar
const user = await prisma.user.create({
    data:{
        name:"luis",
        email:'luis@gmail.com',
        posts:{
            create:[
                {title:"Meu primeiro Post",content:"Olá mundo"}
            ]
        }
    }
})

//ler
const users = await prisma.user.findMany()  //busca todos

const usersUnico = await prisma.user.findUnique({      //busca apenas o que possui esse email
    where:{email:"luis@gmail.com"}
})

//filtrar com condições
const filtered = await prisma.user.findMany({
    where:{name:{contains:"Lu"}}    //filtra os nomes que contém Lu
})

//atualizar dados
const updateUser = await prisma.user.update({
    where:{email:"luis@gmail.com"},
    data:{name:"Luis Eduardo"}
})

//deletar dados
await prisma.user.delete({
    where:{email:"luis@email.com"}
})

///////Recursos extras
const userName = await prisma.user.findMany({
    select:{name:true}  //só retorna o campo name
})

//ordenar resultados
const sorted = await prisma.user.findMany({
    orderBy:{name:'asc'}    //ordena por ordem alfabética
})

//paginar resultados
const page = await prisma.user.findMany({
    skip:0,
    take:10
})

//criar post vinculado a um usuário já existente
const post = await prisma.post.create({
    data:{
        title:"Salve fml",
        content:"conteúdo aqui",
        user:{
            connect:{email:"luis@gmail.com"} //conecta pelo campo único
        }
    }
})

//buscar posts com dados do usuário
const posts = await prisma.post.findMany({
    include:{user:true}
})

