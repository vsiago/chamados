// Home.jsx
"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Modal from "@/components/modal";
import { useState, useEffect } from "react";


export default function Home() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  useEffect(() => {
    document.title = 'Chamados Prefeitura';
  }, []);

  const handleOpenModal = (index: any) => {
    setOpenModalIndex(index);
  }

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  }

  const chamados = [
    { nome: "Troca de Lâmpada na Rua A", secretaria: "Iluminação Pública", bairro: "Engenho", data: "04/02/2024", status: '' },
    { nome: "Reparo em Buraco na Rua B", secretaria: "Obras", bairro: "Engenho", data: "04/02/2024", status: '' },
    { nome: "Vazamento de Água na Rua C", secretaria: "Obras", bairro: "Engenho", data: "04/02/2024", status: '' },
    { nome: "Podas de Árvores na Praça D", secretaria: "Meio Ambiente", bairro: "Engenho", data: "04/02/2024", status: '' },
    { nome: "Sinalização Viária na Avenida E", secretaria: "Trânsito", bairro: "Engenho", data: "04/02/2024", status: '' },
    { nome: "Conserto de Calçada na Rua F", secretaria: "Urbanismo", bairro: "Engenho", data: "04/02/2024", status: '' },
  ];

  const [statuses, setStatuses] = useState(Array(chamados.length).fill("")) // Array para rastrear o status de cada chamado

  const statusColors: Record<string, string> = {
    Recebido: 'text-gray-600',
    'Em análise': 'text-yellow-600',
    'Em andamento': 'text-sky-600',
    'Concluído': 'text-green-600',
    'Rejeitado': 'text-red-600'
    // Adicione outras cores conforme necessário
  };

  // Funcao para definir o status do componente pai
  const handleSetStatus = (index: any, newStatus: any) => {
    const newStatuses = [...statuses];
    newStatuses[index] = newStatus;
    setStatuses(newStatuses);

    // Atualizar o status no objeto chamado correspondente
    const updatedChamados = chamados.map((chamado, i) => {
      if (i === index) {
        return { ...chamado, status: newStatus };
      }
      return chamado;
    });

    // Agora, você pode usar o array `updatedChamados` conforme necessário
    console.log(updatedChamados);
  };

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
        <div className="flex justify-between items-center h-40">
          <h1 className="text-4xl text-gray-600 ">Chamados</h1>
          <div className="flex gap-6 items-end">
            <div className="flex items-center gap-3 px-6 py-3 rounded-md hover:bg-slate-100 hover:cursor-pointer hover:shadow-sm hover:transition-all duration-200">
              <p className="text-slate-600 font-[600] text-end leading-5">Todos os<br></br> chamados:</p>
              <p className="text-slate-600 text-5xl">52</p>
            </div>
            <div className="flex flex-col items-center hover:bg-green-50 px-4 py-2 rounded-md hover:shadow-sm hover:cursor-pointer">
              <div className="flex items-center">
                <Image
                  src="./icons/check.svg"
                  alt="Vercel Logo"
                  width={43}
                  height={43}
                  priority
                />
                <p className="text-slate-600 text-2xl leading-6">78</p>
              </div>
              <p className="text-slate-600 text-sm font-medium mt-[-4px]">Concluídos</p>
            </div>
            <div className="flex flex-col items-center hover:bg-sky-50 px-4 py-2 rounded-md hover:shadow-sm hover:cursor-pointer">
              <div className="flex items-center">
                <Image
                  src="./icons/progress.svg"
                  alt="Vercel Logo"
                  width={38}
                  height={38}
                  priority
                />
                <p className="text-slate-600 text-2xl leading-6">38</p>
              </div>
              <p className="text-slate-600 text-sm font-medium mt-[-3px]">Em andamentos</p>
            </div>
            <div className="flex flex-col items-center hover:bg-yellow-50 px-4 py-2 rounded-md hover:shadow-sm hover:cursor-pointer">
              <div className="flex items-center">
                <Image
                  src="./icons/search.svg"
                  alt="Vercel Logo"
                  width={38}
                  height={38}
                  priority
                />
                <p className="text-slate-600 text-2xl leading-6">88</p>
              </div>
              <p className="text-slate-600 text-sm font-medium mt-[-3px]">Em Análise</p>
            </div>
            <div className="flex flex-col items-center hover:bg-red-50 px-4 py-2 rounded-md hover:shadow-sm hover:cursor-pointer">
              <div className="flex items-center">
                <Image
                  src="./icons/reject.svg"
                  alt="Vercel Logo"
                  width={38}
                  height={38}
                  priority
                />
                <p className="text-slate-600 text-2xl leading-6">13</p>
              </div>
              <p className="text-slate-600 text-sm font-medium mt-[-3px]">Recusados</p>
            </div>
          </div>
        </div>
        <ul>
          {chamados.map((chamado, index) => (
            <li key={index} className="bg-slate-100 min-h-4 rounded grid justify-between grid-cols-7 p-2 my-1 cursor-pointer transition-all ease-in-out duration-200 hover:bg-slate-50 hover:shadow-sm">
              <div className="flex col-span-2 justify-center w-full items-start flex-col">
                <p className="text-gray-500 uppercase text-xs tracking-wider">ASSUNTO do chamado</p>
                <p className="text-gray-700">{chamado.nome}</p>
              </div>
              <div className="flex justify-center w-full items-start flex-col">
                <p className="text-gray-500 uppercase text-xs tracking-wider">Secretaria</p>

                <p className="text-gray-700">{chamado.secretaria}</p>
              </div>
              <div className="col-span-1 flex justify-center items-start flex-col">
                <p className="text-gray-500 uppercase text-xs tracking-wider">Bairro</p>
                <p className="text-gray-700 flex items-center">{chamado.bairro}</p>
              </div>
              <div className="flex justify-center w-4/6 items-start flex-col">
                <p className="text-gray-500 uppercase text-xs tracking-wider">Data</p>
                <p className="text-gray-700">{chamado.data}</p>
              </div>
              <div className="flex justify-center w-4/6 items-start flex-col">
                <p className="text-gray-500 uppercase text-xs tracking-wider">Status</p>
                <p className={statusColors[statuses[index] || chamados[index].status] || 'text-gray-600'}>
                  {statuses[index] ? statuses[index] : chamados[index].status ? chamados[index].status : 'Recebido'}
                </p>
              </div>
              <div className="cursor-pointer relative flex items-center justify-end col-span-1">
                <div className="p-4 w-2" onMouseEnter={() => handleOpenModal(index)} onMouseLeave={handleCloseModal}>
                  <FontAwesomeIcon icon={faEllipsisV} className="h-6 text-gray-400" />
                  <Modal isOpen={openModalIndex === index} onSetStatus={(newStatus) => handleSetStatus(index, newStatus)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
