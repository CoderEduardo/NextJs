import { prisma } from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.json(users);
  }

  if(req.method === "POST"){
    const {name, email} = req.body
    const newUser = await prisma.user.create({
        data:{name,email}
    })
    return res.json(newUser)
  }
}
