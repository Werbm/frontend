import { listaFilmes } from "../data/listaFilmes";
import { fetchFilmesData } from "../services/api";
import { useEffect, useState } from "react";
import { Filme } from "../types/Filme";
import { FaCheck, FaEdit } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function ListarFilmes() {
  const [data, setData] = useState(Array<Filme>);
  const [isListed, setIsListed] = useState(false);

  const handleClick = () => {

    
    setIsListed(true);

    if(isListed) {
        setIsListed(false)
    }

  };

  useEffect(() => {
    fetchFilmesData(setData);
  }, []);
  return (
    <main className="flex justify-center items-center flex-col p-4">
        <button onClick={handleClick} className="text-4xl p-2 bg-slate-950 text-white mb-4 rounded">{isListed ? 'Esconder' : 'Listar'}</button>
      {isListed ? (
        <section className="flex flex-col p-10 items-center gap-6">
          <span className="text-4xl font-bold">Lista de Filmes</span>
          <table className="">
            <thead>
              <tr className="flex text-xl w-[800px] text-center justify-around">
                <th className="border border-gray-400 w-full">Capa</th>
                <th className="border border-gray-400 w-full">Título</th>
                <th className="border border-gray-400 w-full">Ator</th>
                <th className="border border-gray-400 w-full">Faixa Etária</th>
                <th className="border border-gray-400 w-full">Gênero</th>
              </tr>
            </thead>
            <tbody>
              {listaFilmes.length > 0 &&
                listaFilmes.map((filme) => {
                  return (
                    <tr key={filme.id?.toString() ?? "0"} className="flex text-xl w-[959px] text-center justify-around">
                      <td className="w-full">
                        <img
                          src={filme.urlImagem}
                          alt="logo usuario"
                          className=""
                        />
                      </td>
                      <td className="border border-gray-400 w-full">{filme.titulo}</td>
                      <td className="border border-gray-400 w-full">{filme.ator}</td>
                      <td className="border border-gray-400 w-full">{filme.faixaEtaria}</td>
                      <td className="border border-gray-400 w-full">{filme.genero}</td>
                      <td className="flex items-center justify-center gap-6 w-full">
                        <button><FaEdit className="text-5xl"></FaEdit></button>
                        <button><FaX className="text-5xl"></FaX></button>
                      </td>
                      
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      ) : (
        ""
      )}
    </main>
  );
}
