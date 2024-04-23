import { PrismaClient } from "@prisma/client";

export default function handler(req, res) {
    if (req.method=="GET") 
        return handleGetEventos(req, res);
    if (req.method=="POST") 
        return handlePostEventos(req, res);

    res.status(405).send({})
}


async function handleGetEventos(req, res) {
    let prisma = new PrismaClient();
    let eventos = await prisma.evento.findMany();
    res.status(200).send(eventos);
}


async function handlePostEventos(req, res) {
    let prisma = new PrismaClient();
    let evento = await prisma.evento.create({data: req.body});
    res.status(201).send(evento);
}