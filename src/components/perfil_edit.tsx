import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../api/token";
import { useUser } from "../userContext"; // Importando o hook do contexto

const editProfileFormSchema = z.object({
  username: z
    .string()
    .nonempty("O nome de usuário é obrigatório!")
    .min(6, "O username precisa de no mínimo 6 caracteres!"),
  description: z.string().optional(),
  profile_picture: z.string().optional()
});

type editProfileFormData = z.infer<typeof editProfileFormSchema>;

export function EditProfileModal({ onClose }: { onClose: () => void }) {
  const { user, setUser } = useUser(); // Usando o contexto de usuário
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<editProfileFormData>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      username: user.username,
    },
  });

  // Atualizar os valores do formulário ao carregar os dados do perfil
  useEffect(() => {
    setValue("username", user.username);
    setValue("description", user.description || '');
    setValue("profile_picture", user.profile_picture || '');
  }, [user, setValue]);

  const editUser = async (data: editProfileFormData) => {
    const idUsuario = user.id; // Usando o ID diretamente do contexto
    console.log("ID do usuário:", idUsuario);

    if (!idUsuario) {
      console.error("Usuário não encontrado.");
      return;
    }

    const payload = {
      username: data.username,
      description: data.description || '',
      profile_picture: data.profile_picture || '',
    };

    try {
      const response = await api.patch(`/users/${idUsuario}`, payload);
      if (response.status === 200) {
        setUser(response.data);  // Atualizando o contexto com os novos dados
        onClose();
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">Editar Perfil</h2>

        <form
          onSubmit={handleSubmit(editUser)}
          className="space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700">
              Nome de usuário
            </label>
            <input
              type="text"
              id="username"
              className="p-2 border rounded"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700">
              Descrição
            </label>
            <textarea
              id="description"
              className="p-2 border rounded"
              {...register("description")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile_picture" className="text-gray-700">
              Foto de Perfil (URL)
            </label>
            <input
              type="url"
              id="profile_picture"
              className="p-2 border rounded"
              {...register("profile_picture")}
            />
            {errors.profile_picture && (
              <span className="text-red-500 text-sm">
                {errors.profile_picture.message}
              </span>
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="mr-2 text-gray-500"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
