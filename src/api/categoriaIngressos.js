import { PrismaClient } from "@prisma/client";

export default function handler(req, res) {
    if (req.method=="GET") 
        return handleGetCategoriaIngressos(req, res);
    if (req.method=="POST") 
        return handlePostCategoriaIngressos(req, res);

    res.status(405).send({})
}


async function handleGetCategoriaIngressos(req, res) {
    let prisma = new PrismaClient();
    let categoriaIngressos = await prisma.categoriaIngresso.findMany();
    res.status(200).send(categoriaIngressos);
}


async function handlePostCategoriaIngressos(req, res) {
    let prisma = new PrismaClient();
    let categoriaIngresso = await prisma.categoriaIngresso.create({data: req.body});
    res.status(201).send(categoriaIngresso);
}