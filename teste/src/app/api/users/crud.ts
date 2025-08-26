import {prisma} from '../../../../lib/prisma'

//crud com prisma

//criar
const user = await prisma.user.create({
    data:{
        name:"luis",
        email:'luis@gmail.com'
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


