import React from 'react';

interface ModalProps {
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-white min-w-52 p-2 absolute right-2 rounded-xl transition-all shadow-2xl z-10 ${
        isOpen ? 'visible opacity-100 translate-y-0 top-10' : 'invisible opacity-0 -translate-y-4 pointer-events-none top-8'
      }`}
    >
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded">
        <p className='text-yellow-600'>Em analise</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded">
        <p className='text-sky-600 h-5'>Em andamento</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded">
        <p className='text-green-600'>Concluido</p>
      </div>
      <div className="text-gray-700 h-5 hover:bg-slate-100 p-5 flex items-center rounded mt-2 border-t-2">
        <p className='text-red-700'>Excluir</p>
      </div>
    </div>
  );
};

export default Modal;
