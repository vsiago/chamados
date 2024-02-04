import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onSetStatus: (newStatus: string) => void; // Nova propriedade para definir o status no componente pai
}

const Modal: React.FC<ModalProps> = ({ isOpen, onSetStatus }) => {
  // Funcao para definir o status no componente pai
  const handleSetStatus = (newStatus: any) => {
    onSetStatus(newStatus)
  }

  return (
    <div
      className={`bg-white min-w-52 p-2 absolute right-2 rounded-xl transition-all shadow-2xl z-10 ${isOpen ? 'visible opacity-100 translate-y-0 top-10' : 'invisible opacity-0 -translate-y-4 pointer-events-none top-8'
        }`}
    >
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded" onClick={() => handleSetStatus('Em análise')}>
        <p className='text-yellow-600'>Em análise</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded" onClick={() => handleSetStatus('Em andamento')}>
        <p className='text-sky-600 h-5'>Em andamento</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded" onClick={() => handleSetStatus('Concluído')}>
        <p className='text-green-600'>Concluído</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded" onClick={() => handleSetStatus('Rejeitado')}>
        <p className='text-red-600'>Rejeitado</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded mt-2 border-t-2">
        <p className='text-red-800'>Excluir</p>
      </div>
    </div>
  );
};

export default Modal;
