'use client'
import { api } from "@/api-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation";

export default function CatIngressos(){

    const [categoriaIngressos, setCategoriaIngressos] = useState([])

    const CategoriaIngressosSchema = yup.object().shape({
        tipo_cat_ingresso: yup.string()
            .required("Tipo categoria é obrigatório"),
              
        
    })

    const router = useRouter();

    const {
        register, handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(CategoriaIngressosSchema) });


    const onSubmit = async (data) => {
        console.log(data);
        toast.error(data.tipo_cat_ingresso);

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
            <h1 className="bg-cyan-300">Pagina de cadastro de categoria de ingressos</h1>
            <div>
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="tipo_cat_ingresso" className="block text-sm font-medium leading-6 text-gray-900">
                            Categoria
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("tipo_cat_ingresso")}
                                type="text"
                                autoComplete="tipo_cat_ingresso"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                            {errors.tipo_cat_ingresso?.message}
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