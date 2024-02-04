// Home.jsx
"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Modal from "@/components/modal";
import { useState } from "react";

export default function Home() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpenModal = (index) => {
    setOpenModalIndex(index);
  }

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  }

  const chamados = [
    { nome: "Chamado 1", secretaria: "Secretaria 1", bairro: "Bairro 1", data: "01/01/2022" },
    { nome: "Chamado 2", secretaria: "Secretaria 2", bairro: "Bairro 2", data: "02/01/2022" },
    { nome: "Chamado 2", secretaria: "Secretaria 2", bairro: "Bairro 2", data: "02/01/2022" },
    { nome: "Chamado 2", secretaria: "Secretaria 2", bairro: "Bairro 2", data: "02/01/2022" },
    { nome: "Chamado 2", secretaria: "Secretaria 2", bairro: "Bairro 2", data: "02/01/2022" },
    { nome: "Chamado 2", secretaria: "Secretaria 2", bairro: "Bairro 2", data: "02/01/2022" },
    // Adicione mais chamados conforme necessário
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col">
      <header className="bg-slate-800">
        <div className="flex items-center justify-between container m-auto h-20">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <p>Sair</p>
        </div>
      </header>
      <main className="container m-auto flex-1 my-4">
        <h1 className="text-3xl text-gray-600 h-20 mt-5">Chamados</h1>
        <ul>
          {chamados.map((chamado, index) => (
            <li key={index} className="bg-slate-100 min-h-10 rounded flex items-center justify-between p-3 my-1 cursor-pointer transition-all ease-in-out duration-200 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-gray-700">{chamado.nome}</p>
              <p className="text-gray-700">{chamado.secretaria}</p>
              <p className="text-gray-700">{chamado.bairro}</p>
              <p className="text-gray-700">{chamado.data}</p>
              <p className="text-gray-700">Status:</p>
              <div className="p-3 cursor-pointer relative flex items-center" onMouseEnter={() => handleOpenModal(index)} onMouseLeave={handleCloseModal}>
                <FontAwesomeIcon icon={faEllipsisV} className="h-6 text-gray-400"/>
                <Modal isOpen={openModalIndex === index} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
