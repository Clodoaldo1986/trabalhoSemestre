'use client'

import Link from "next/link"

export default function Ingressos() {
    return (
        <div className="text-center">
            
            <h1 className="bg-cyan-300">Pagina de Ingressos</h1>
            <div>
                <div>

                <div>
                    <div className="flex flex-row">
                        <div className="text-center">
                            <Link href="/pages/Ingressos/cadIngressos">Cadastrar Novo Ingressos  |  </Link>

                            <Link href="/pages/Ingressos/catIngressos">Cadastrar categoria de Ingressos  |  </Link>

                            <Link href="/pages/Ingressos/loteIngressos">Cadastrar lote de Ingressos</Link>
                        </div>
                    </div>
                </div>

                </div>
                
            </div>

        </div>
    )
}