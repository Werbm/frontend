import axios from "axios";
import { Filme } from "../types/Filme";

export async function fetchFilmesData(setData:Function){
    try{
        const response = await axios.get("http://localhost:5000/filmes");
        console.log(response.data);
        setData(response.data.users);
    }catch(error:any){
        console.error(`Erro ao buscar contatos na api: ${error.message}`);
    }
}

export async function saveData(data:Filme){
    try{
        const payload = {
            urlImagem: data.urlImagem,
            titulo: data.titulo,
            ator: data.ator,
            faixaEtaria: data.faixaEtaria,
            genero: data.genero,
        }

        const response = await axios.post("http://localhost:5000/filmes", payload);
        console.log(response.data);
    }catch(error:any){
        console.log(`Erro ao enviar dados para api: ${error. message}`);
    }
}