import { PrismaClient } from "@prisma/client";

export default function handler(req, res) {
    if (req.method=="GET") 
        return handleGetIngressos(req, res);
    if (req.method=="POST") 
        return handlePostIngressos(req, res);

    res.status(405).send({})
}


async function handleGetIngressos(req, res) {
    let prisma = new PrismaClient();
    let ingressos = await prisma.ingresso.findMany();
    res.status(200).send(ingressos);
}


async function handlePostIngressos(req, res) {
    let prisma = new PrismaClient();
    let ingresso = await prisma.ingresso.create({data: req.body});
    res.status(201).send(ingresso);
}