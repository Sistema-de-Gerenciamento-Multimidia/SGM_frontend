import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../api/token";

interface EditProfileModalProps {
  profileData: {
    id: number | null;
    email: string;
    username: string;
    name: string;
    description: string | null;
    date_joined: string;
    date_of_birth: string | null;
    profile_picture: string;
  };
  setProfileData: (updatedData: {
    id: number | null;
    email: string;
    username: string;
    name: string;
    description: string | null;
    date_joined: string;
    date_of_birth: string | null;
    profile_picture: string;
  }) => void;
  onClose: () => void;
}

const editProfileFormSchema = z.object({
  username: z
    .string()
    .nonempty("O nome de usuário é obrigatório!")
    .min(6, "O username precisa de no mínimo 6 caracteres!"),
  description: z.string(),
  
});

type editProfileFormData = z.infer<typeof editProfileFormSchema>;

export function EditProfileModal({
  profileData,
  setProfileData,
  onClose,
}: EditProfileModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<editProfileFormData>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      username: profileData.username, // Nome inicial
    },
  });

  const [bio, setBio] = useState(profileData.description || "");
  const [fotoPerfil, setFotoPerfil] = useState(profileData.profile_picture);

  const editUser = async (data: editProfileFormData) => {

    

    const idUsuario = sessionStorage.getItem("user_id");
    const response = await api.patch(`/users/${idUsuario}/`,data)

    console.log(response)

    // Atualizar os dados do perfil
    setProfileData({
      ...profileData, // Preservar os dados não alterados
      username: data.username,
      description: bio, // Atualizar a descrição com o valor do estado local
      profile_picture: fotoPerfil, // Atualizar a foto de perfil
    });
    onClose();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(editUser)}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-primarylemon p-6 rounded shadow w-96">
          <h2 className="text-xl font-semibold mb-4">Editar Perfil</h2>

          {/* Nome */}
          <div className="mb-4">
            <label className="block text-gray-700">Nome de Usuário</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded outline-none"
              {...register("username")}
              onBlur={(e) => setValue("username", e.target.value)} // Atualizar estado no blur
            />
            {errors.username && (<span className="text-red-600 text-sm">{errors.username.message}</span>)}
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-3 py-2 border rounded outline-none"
            />
          </div>

          {/* Foto de Perfil */}
          <div className="mb-4">
            <label className="block text-gray-700">Foto de Perfil (URL)</label>
            <input
              type="text"
              value={fotoPerfil}
              onChange={(e) => setFotoPerfil(e.target.value)}
              className="w-full px-3 py-2 border rounded outline-none"
            />
          </div>

          {/* Botões */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-fulvouscolor text-white rounded hover:bg-fulvoushover"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
