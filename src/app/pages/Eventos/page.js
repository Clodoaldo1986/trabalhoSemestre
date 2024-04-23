'use client'

import { api } from "@/api-client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Eventos(){

    const [eventos, setEventos] = useState([])
    useEffect(() => {
        api.get("/api/eventos")
            .then(res => setEventos(res.data));
    }, []);


    return(
        <div className="text-center">
            <h1 className="bg-cyan-300" >Pagina de Eventos</h1>
            <div>
                <div>
                    <Link href="/pages/Eventos/cadEventos">NOVO EVENTO  || </Link>
                    <Link href="/pages/Eventos/catEventos">CATEGORIA EVENTO</Link>

                    <ol className="pt-8">
                        {eventos.map((eventos) => {
                            return <li>
                                {eventos.nome} - {eventos.local} -  {eventos.data} -  
                                {eventos.descricao} -  
                                <Link href={"/eventos/" + eventos.id}>+detalhes</Link>
                            </li>
                        })}
                    </ol>

                </div>
            </div>
        </div>
    )
}