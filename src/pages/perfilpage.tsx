import { useState } from "react";
import { Galeria } from "../components/perfil_galeria";
import { Fotos } from "../components/perfil_fotos";
import { Videos } from "../components/perfil_videos";
import { Audio } from "../components/perfil_audio";
import { Header } from "../components/header";
import { EditProfileModal } from "../components/perfil_edit";
import { toast } from "sonner";
import { CustomSelect } from "../components/ui/select";


export function PerfilPage() {
  const [activeTab, setActiveTab] = useState("Galeria");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  

  const [profileData, setProfileData] = useState({
    nome: "Nome do Usuário",
    bio: "Aqui vai a bio do usuário.",
    seguidores: 100,
    seguindo: 150,
    fotoPerfil: "/robot_perfil.png",
  });

  const handleSave = (updatedData: typeof profileData) => {
    setProfileData(updatedData);
    setIsEditModalOpen(false);

    toast.success("Alterações salvas com sucesso!");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <main className="flex-grow p-6">
        <div className="bg-white p-6 rounded shadow flex items-center space-x-6">
          {/* Foto de Perfil */}
          <div className="w-28 h-28 rounded-full overflow-hidden border border-gray-300">
            <img
              src={profileData.fotoPerfil}
              alt="Foto de Perfil"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Informações do Perfil */}
          <div className="w-full">
            <div className="flex justify-between">
              <h2 className="text-3xl font-semibold">{profileData.nome}</h2>
              <CustomSelect
                profileData={profileData}
                setProfileData={setProfileData}
              />
            </div>
            {/* Bio */}
            <p className="mt-2 text-gray-600">{profileData.bio}</p>
            <div className="flex space-x-4 mt-2">
              <p>
                <span className="font-bold">{profileData.seguidores}</span>{" "}
                Seguidores
              </p>
              <p>
                <span className="font-bold">{profileData.seguindo}</span>{" "}
                Seguindo
              </p>
            </div>
          </div>
        </div>

        {/* Abas */}
        <div className="mt-6">
          <ul className="flex border-b">
            {["Galeria", "Fotos", "Videos", "Audio"].map((tab) => (
              <li key={tab} className={`mr-1`}>
                <button
                  className={`inline-block py-2 px-4 font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? "text-fulvouscolor border-b-4 border-fulvouscolor text-lg"
                      : "text-gray-500 hover:text-fulvouscolor"
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
            {activeTab === "Galeria" && <Galeria />}
            {activeTab === "Fotos" && <Fotos />}
            {activeTab === "Videos" && <Videos />}
            {activeTab === "Audio" && <Audio />}
          </div>
        </div>

        {/* Modal de Edição de Perfil */}
        {isEditModalOpen && (
          <EditProfileModal
            profileData={profileData}
            setProfileData={handleSave}
            onClose={() => setIsEditModalOpen(false)}
          />
        )}

      </main>
    </div>
  );
}
