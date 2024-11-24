import { useState } from "react";

interface EditProfileModalProps {
  profileData: {
    nome: string;
    bio: string;
    seguidores: number;
    seguindo: number;
    fotoPerfil: string;
  };
  setProfileData: (updatedData: {
    nome: string;
    bio: string;
    seguidores: number;
    seguindo: number;
    fotoPerfil: string;
  }) => void;
  onClose: () => void;
}

export function EditProfileModal({
  profileData,
  setProfileData,
  onClose,
}: EditProfileModalProps) {
  const [nome, setNome] = useState(profileData.nome);
  const [bio, setBio] = useState(profileData.bio);
  const [fotoPerfil, setFotoPerfil] = useState(profileData.fotoPerfil);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-semibold mb-4">Editar Perfil</h2>

        {/* Nome */}
        <div className="mb-4">
          <label className="block text-gray-700">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-gray-700">Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Foto de Perfil */}
        <div className="mb-4">
          <label className="block text-gray-700">Foto de Perfil (URL):</label>
          <input
            type="text"
            value={fotoPerfil}
            onChange={(e) => setFotoPerfil(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {feedback && <p className="text-red-500 text-sm mb-4">{feedback}</p>}

        {/* Botões */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              if (nome.trim().length < 8) {
                setFeedback("O nome deve ter pelo menos 3 caracteres.");
                return;
              }

              //atualizar dados
              setProfileData({
                ...profileData,
                nome,
                bio,
                fotoPerfil,
              });

              onClose();
            }}
            className="px-4 py-2 bg-fulvouscolor text-white rounded hover:bg-fulvoushover"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
