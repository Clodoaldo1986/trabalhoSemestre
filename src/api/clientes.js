import { PrismaClient } from "@prisma/client";

export default function handler(req, res) {
    if (req.method=="GET") 
        return handleGetClientes(req, res);
    if (req.method=="POST") 
        return handlePostClientes(req, res);

    res.status(405).send({})
}


async function handleGetClientes(req, res) {
    let prisma = new PrismaClient();
    let clientes = await prisma.cliente.findMany();
    res.status(200).send(clientes);
}


async function handlePostClientes(req, res) {
    let prisma = new PrismaClient();
    let cliente = await prisma.cliente.create({data: req.body});
    res.status(201).send(cliente);
}