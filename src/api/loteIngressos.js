import { PrismaClient } from "@prisma/client";

export default function handler(req, res) {
    if (req.method=="GET") 
        return handleGetLoteIngressos(req, res);
    if (req.method=="POST") 
        return handlePostLoteIngressos(req, res);

    res.status(405).send({})
}


async function handleGetLoteIngressos(req, res) {
    let prisma = new PrismaClient();
    let loteIngressos = await prisma.loteIngresso.findMany();
    res.status(200).send(loteIngressos);
}


async function handlePostLoteIngressos(req, res) {
    let prisma = new PrismaClient();
    let loteIngresso = await prisma.loteIngresso.create({data: req.body});
    res.status(201).send(loteIngresso);
}