import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../types/Filme";
import { saveData } from "../services/api";

export function FormFilmes() {

    const {handleSubmit, register} = useForm<Filme>();

    const handleFormSubmit:SubmitHandler<Filme> = (data) => {
        console.log(data);
        saveData(data);
    }

    return (
        <main className="flex justify-center p-4">
        <section className="flex flex-col gap-6 p-10 justify-center bg-slate-400 items-center w-[600px] rounded">
            <span className="text-4xl font-bold">Formulário de Filmes</span>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col items-center justify-center gap-4"> 
                <div className="form-group"> 
                    <label className="form-label">Capa</label> 
                    <input type="text" className="form-control" id="urlImagem" {...register("urlImagem")} /> 
                </div> 
                <div className="form-group"> 
                    <label className="form-label">Titulo</label> 
                    <input type="text" className="form-control" id="titulo" {...register("titulo")}/> 
                </div> 
                <div className="form-group">
                    <label className="form-label">Ator</label>
                    <input type="text" className="form-control" id="ator" {...register("ator")}/>
                </div> 
                <div className="form-group"> 
                    <label className="form-label">Faixa Etária</label> 
                    <input type="email" className="form-control" id="faixaEtaria" {...register("faixaEtaria")}/> 
                </div>
                <div className="form-group"> 
                    <label className="form-label">Gênero</label> 
                    <input type="text" className="form-control" id="genero" {...register("genero")}/> 
                </div> 
                <button type="submit" className="text-xl p-2 bg-slate-950 text-white mb-4 rounded">Cadastrar</button> 
            </form>
        </section>
        </main>
    );
}