'use client'
import { api } from "@/api-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation";

export default function Ingressos(){

    const [ingressos, setIngressos] = useState([])

    const IngressosSchema = yup.object().shape({
        quantidade: yup.string()
            .required("Quantidade é obrigatório"),
        lote: yup.string()
            .required("Lote é obrigatório"),
        categoria: yup.string()
            .required("Categoria é obrigatório"),
        valor: yup.number()
            .required("Valor é obrigatório")
        
    })

    const router = useRouter();

    const {
        register, handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(IngressosSchema) });


    const onSubmit = async (data) => {
        console.log(data);
        toast.error(data.quantidade);

        api.post('/api/ingressos', data)
            .then((response) => {
                toast.success('Cadastrado com sucesso!');
                router.replace('/ingressos');
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || 'Erro ao cadastrar ingressos!');
            })
    };



    return(
        <div className="text-center">
            <h1 className="bg-cyan-300">Pagina de cadastro de Ingressos</h1>
            <div>
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="quantidade" className="block text-sm font-medium leading-6 text-gray-900">
                            Quantidade
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("quantidade")}
                                type="number"
                                autoComplete="quantidade"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.quantidade?.message}
                        </p>

                    </div>

                    <div className='flex flex-row gap-x-4'>

                        <div>
                            <label htmlFor="lote" className="block text-sm font-medium leading-6 text-gray-900">
                                Lote
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("lote")}
                                    type="text"
                                    autoComplete="lote"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-2 text-sm text-red-600">
                                {errors.lote?.message}
                            </p>

                        </div>

                        <div>
                            <label htmlFor="categoria" className="block text-sm font-medium leading-6 text-gray-900">
                                Categoria
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("categoria")}
                                    type="text"
                                    autoComplete="categoria"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-2 text-sm text-red-600">
                                {errors.categoria?.message}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="valor" className="block text-sm font-medium leading-6 text-gray-900">
                            Valor
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("valor")}
                                type="text"
                                autoComplete="valor"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.valor?.message}
                        </p>

                    </div>

    

                   
                    <div>
                        <p></p>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Cadastrar
                        </button>
                    </div>
                    <p></p>
                    <div>
                        <Link href="/pages/Ingressos">VOLTAR</Link>
                    </div>
                </form>
                    
                    


                
            </div>
        </div>
    )
}