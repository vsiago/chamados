// Home.jsx
"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Modal from "@/components/modal";
import { useState, useEffect } from "react";


export default function Home() {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [status, setStatus] = useState("") // Novo estado para rastrear o status dos chamados

  // Funcao para definir o status do componente pai
  const handleSetStatus = (newStatus:any) => {
    setStatus(newStatus);
  }

  useEffect(() => {
    document.title = 'Chamados Prefeitura';
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Remova a atualização automática do cliente
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const handleOpenModal = (index:any) => {
    setOpenModalIndex(index);
  }

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  }

  const chamados = [
    { nome: "Troca de Lâmpada na Rua A", secretaria: "Iluminação Pública", bairro: "Bairro Engenho", data: "04/02/2024" },
    { nome: "Reparo em Buraco na Rua B", secretaria: "Obras", bairro: "Bairro Engenho", data: "04/02/2024" },
    { nome: "Vazamento de Água na Rua C", secretaria: "Obras", bairro: "Bairro Engenho", data: "04/02/2024" },
    { nome: "Podas de Árvores na Praça D", secretaria: "Meio Ambiente", bairro: "Bairro Engenho", data: "04/02/2024" },
    { nome: "Sinalização Viária na Avenida E", secretaria: "Trânsito", bairro: "Bairro Engenho", data: "04/02/2024" },
    { nome: "Conserto de Calçada na Rua F", secretaria: "Urbanismo", bairro: "Bairro Engenho", data: "04/02/2024" },
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col">
      <header className="bg-[#003768]">
        <div className="flex items-center justify-between container m-auto h-20">
          <Image
            src="/logo-prefeitura-itaguai.png"
            alt="Vercel Logo"
            width={140}
            height={24}
            priority
          />
          <p className="cursor-pointer">Sair</p>
        </div>
      </header>
      <main className="container m-auto flex-1 my-4">
        <h1 className="text-3xl text-gray-600 h-20 mt-5">Chamados</h1>
        <ul>
          {chamados.map((chamado, index) => (
            <li key={index} className="bg-slate-100 min-h-4 rounded grid justify-between grid-cols-7 p-2 my-1 cursor-pointer transition-all ease-in-out duration-200 hover:bg-slate-50 hover:shadow-sm">
              <div className="col-span-2 w-full flex items-center">
                <p className="text-gray-700">{chamado.nome}</p>
              </div>
              <div className="col-span-1 w-full flex items-center">
                <p className="text-gray-700">{chamado.secretaria}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-gray-700 flex items-center">{chamado.bairro}</p>
              </div>
              <div className="flex justify-end w-4/6 items-center">
                <p className="text-gray-700">{chamado.data}</p>
              </div>
              <div className="flex justify-end w-4/6 items-center">
                <p className="text-gray-700">Status: {status}</p>
              </div>
              <div className="cursor-pointer relative flex items-center justify-end col-span-1">
                <div className="p-4 w-2" onMouseEnter={() => handleOpenModal(index)} onMouseLeave={handleCloseModal}>
                  <FontAwesomeIcon icon={faEllipsisV} className="h-6 text-gray-400"/>
                <Modal isOpen={openModalIndex === index} onSetStatus={(newStatus) => handleSetStatus(newStatus)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
