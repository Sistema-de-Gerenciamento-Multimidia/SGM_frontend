// src/pages/perfilpage.tsx

import { useState } from 'react';
import { FaCog, FaUserCircle } from "react-icons/fa";
import Perfil from "../../public/robot_perfil.png";
import { Galeria } from '../components/perfil_galeria';
import { Fotos } from '../components/perfil_fotos';
import { Videos } from '../components/perfil_videos';
import { Audio } from '../components/perfil_audio';

export function PerfilPage() {
  const [activeTab, setActiveTab] = useState('Galeria');

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-fulvouscolor">Nome do App</h1>
        <input
          type="text"
          placeholder="Pesquisar arquivos..."
          className="flex-grow mx-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-fulvoushover"
        />
        <div className="flex items-center space-x-4">
          <FaCog className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow p-6">
        {/* Seção de Perfil */}
        <div className="bg-white p-6 rounded shadow flex items-center space-x-6">
          {/* Foto de Perfil */}
          <div className="w-28 h-28 rounded-full overflow-hidden border border-gray-300">
            <img 
                src={Perfil}
                alt="Foto de Perfil" 
                className="w-full h-full object-cover" 
            />
            </div>
          {/* Informações do Perfil */}
          <div>
            <h2 className="text-2xl font-semibold">Nome do Usuário</h2>
            <div className="flex space-x-4 mt-2">
              <p><span className="font-bold">100</span> Seguidores</p>
              <p><span className="font-bold">150</span> Seguindo</p>
            </div>
            {/* Botões */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-fulvouscolor text-white px-4 py-2 rounded shadow hover:bg-fulvoushover">
                Alterar Perfil
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300">
                Compartilhar
              </button>
            </div>
          </div>
        </div>

        {/* Abas */}
        <div className="mt-6">
          <ul className="flex border-b">
            {['Galeria', 'Fotos', 'Videos', 'Audio'].map((tab) => (
              <li key={tab} className={`mr-1`}>
                <button
                  className={`inline-block py-2 px-4 font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-fulvouscolor border-b-4 border-fulvouscolor text-lg'
                      : 'text-gray-500 hover:text-fulvouscolor'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          {/* Conteúdo */}
          <div className="bg-white p-6 mt-4 shadow rounded">
            {activeTab === 'Galeria' && <Galeria />}
            {activeTab === 'Fotos' && <Fotos />}
            {activeTab === 'Videos' && <Videos />}
            {activeTab === 'Audio' && <Audio />}
          </div>
        </div>
      </main>
    </div>
  );
}