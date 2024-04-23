'use client'
import { api } from "@/api-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation";

export default function CadEventos(){

    const [eventos, setEventos] = useState([])

    const EventosSchema = yup.object().shape({
        nome: yup.string()
            .required("# Nome do evento é obrigatório"),
        data: yup.string()
            .required("# Data do evento é obrigatório"),
        local: yup.string()
            .required("# Local do evento é obrigatório"),
        descricao: yup.string()
            .required("# Descricao do evento é obrigatório")
        
    })

    const router = useRouter();

    const {
        register, handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(EventosSchema) });


    const onSubmit = async (data) => {
        console.log(data);
        toast.error(data.nome);

        api.post('/api/eventos', data)
            .then((response) => {
                toast.success('Cadastrado com sucesso!');
                router.replace('/eventos');
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || 'Erro ao cadastrar eventos!');
            })
    };



    return(
        <div className="text-center">
            <h1 className="bg-cyan-300">Pagina de cadastro de Eventos</h1>
            <div>
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                            Nome do Evento
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("nome")}
                                type="text"
                                autoComplete="nome"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.nome?.message}
                        </p>

                    </div>

                    <div className='flex flex-row gap-x-4'>

                        <div>
                            <label htmlFor="data" className="block text-sm font-medium leading-6 text-gray-900">
                                Data do Evento
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("data")}
                                    type="text"
                                    autoComplete="data"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-2 text-sm text-red-600">
                                {errors.data?.message}
                            </p>

                        </div>

                        <div>
                            <label htmlFor="local" className="block text-sm font-medium leading-6 text-gray-900">
                                Local do evento
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("local")}
                                    type="text"
                                    autoComplete="local"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-2 text-sm text-red-600">
                                {errors.local?.message}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="descricao" className="block text-sm font-medium leading-6 text-gray-900">
                            Descricao do Evento
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("descricao")}
                                type="text"
                                autoComplete="descricao"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.descricao?.message}
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
                        <Link href="/pages/Eventos
                        ">VOLTAR</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}