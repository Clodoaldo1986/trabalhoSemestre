'use client'

import { api } from "@/api-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation";

export default function CadClientes() {

    const [clientes, setClientes] = useState([])

    const ClienteSchema = yup.object().shape({
        nome: yup.string()
            .required("Nome é obrigatório"),
        email: yup.string()
            .email("Digite um email válido")
            .required("Email é obrigatório"),
        sobre_nome: yup.string()
            .required("Sobrenome é obrigatório"),
        idade: yup.number()
            .required("Idade é obrigatório"),
        endereco: yup.string()
            .required("Endereço é obrigatório")
    })

    const router = useRouter();

    const {
        register, handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ClienteSchema) });


    const onSubmit = async (data) => {
        console.log(data);
        toast.error(data.nome);

        api.post('/api/clientes', data)
            .then((response) => {
                toast.success('Usuário cadastrado com sucesso!');
                router.replace('/clientes');
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || 'Erro ao cadastrar usuário!');
            })
    };

    return (
        <div>
            <h1 className="bg-cyan-300">PAGINA PARA CADASTRO DE NOVO CLIENTE</h1>
            <div>
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                            Nome
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
                            <label htmlFor="sobre_nome" className="block text-sm font-medium leading-6 text-gray-900">
                                Sobrenome
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("sobre_nome")}
                                    type="text"
                                    autoComplete="Sobre_nome"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-2 text-sm text-red-600">
                                {errors.sobre_nome?.message}
                            </p>

                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("email")}
                                    type="text"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-2 text-sm text-red-600">
                                {errors.email?.message}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="idade" className="block text-sm font-medium leading-6 text-gray-900">
                            Idade
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("idade")}
                                type="idade"
                                autoComplete="idade"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.idade?.message}
                        </p>

                    </div>

                    <div>
                        <label htmlFor="endereco" className="block text-sm font-medium leading-6 text-gray-900">
                            Endereço
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("endereco")}
                                type="endereco"
                                autoComplete="endereco"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.endereco?.message}
                        </p>

                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        </div>

                        <div className="text-sm leading-6">
                            <Link href="/pages/Clientes" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Já tenho cadastro
                            </Link>
                        </div>
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
                </form>
            </div>

        </div>
    )
}