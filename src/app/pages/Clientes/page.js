'use client'

import { api } from "@/api-client";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Clientes() {

    const [clientes, setClientes] = useState([])
    useEffect(() => {
        api.get("/api/clientes")
            .then(res => setClientes(res.data));
    }, []);


    return (
        <div className="text-center">
            <div className="flex flex-row">

                <h1 className="bg-cyan-300">Pagina de Clientes</h1>

            </div>

            <div>
                <div>
                    <div className="flex flex-row">
                        <Link
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            href="/pages/Clientes/cadClientes">
                            Cadastrar novo Cliente
                        </Link>

                        <ol className="pt-8">
                            {clientes.map((cliente) => {
                                return <li>
                                    {cliente.nome} - {cliente.email} -  {cliente.sobre_nome} -
                                    {cliente.idade} -  {cliente.endereco} -
                                    <Link href={"/clientes/" + cliente.id}>+detalhes</Link>
                                </li>
                            })}
                        </ol>
                    </div>

                </div>

            </div>
        </div>
    )
}