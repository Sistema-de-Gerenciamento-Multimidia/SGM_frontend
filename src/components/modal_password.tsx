import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const modalPasswordFormSchema = z
  .object({
    current_password: z
      .string()
      .min(8, "A senha precisa de no mínimo 8 caracteres!")
      .refine((password) => !/^\d+$/.test(password), {
        message: "A senha não pode ser somente de números!",
      }),
    new_password: z
      .string()
      .min(8, "A senha precisa de no mínimo 8 caracteres!")
      .refine((password) => !/^\d+$/.test(password), {
        message: "A senha não pode ser somente de números!",
      }),
    confirm_new_password: z
      .string()
      .min(8, "A senha precisa de no mínimo 8 caracteres!")
      .refine((password) => !/^\d+$/.test(password), {
        message: "A senha não pode ser somente de números!",
      }),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "As senhas precisam ser iguais!",
    path: ["confirm_new_password"],
  });

type ModalPasswordFormData = z.infer<typeof modalPasswordFormSchema>;

interface ModalPasswordProps {
  onClose: () => void;
}

export function Modal_Password({ onClose }: ModalPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalPasswordFormData>({
    resolver: zodResolver(modalPasswordFormSchema),
  });

  const editPassword = (data: ModalPasswordFormData) => {
    console.log("Senha alterada com sucesso!", data);
    toast.success("Senha alterada com sucesso!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-primarylemon p-6 rounded shadow w-96">
        <h2 className="text-xl font-semibold mb-4">Alterar Senha</h2>

        <form className="flex flex-col" onSubmit={handleSubmit(editPassword)}>
          <div className="mb-4">
            <label className="block text-gray-700">Senha Atual</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded outline-none"
              {...register("current_password")}
            />
            {errors.current_password && (
              <span className="text-red-600 text-sm">
                {errors.current_password.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Nova Senha</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded outline-none"
              {...register("new_password")}
            />
            {errors.new_password && (
              <span className="text-red-600 text-sm">
                {errors.new_password.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirmar Nova Senha</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded outline-none"
              {...register("confirm_new_password")}
            />
            {errors.confirm_new_password && (
              <span className="text-red-600 text-sm">
                {errors.confirm_new_password.message}
              </span>
            )}
          </div>

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
        </form>
      </div>
    </div>
  );
}
