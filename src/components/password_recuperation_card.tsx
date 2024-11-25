import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passwordRecuperationFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Formato de email inválido")
    .toLowerCase(),
});

type passwordRecuperationFormData = z.infer<
  typeof passwordRecuperationFormSchema
>;

export function PasswordRecuperationCard() {
  const [, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<passwordRecuperationFormData>({
    resolver: zodResolver(passwordRecuperationFormSchema),
  });

  function passwordRecuperationUser(data: passwordRecuperationFormData) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <form className="flex flex-col w-full max-w-xs gap-3" onSubmit={handleSubmit(passwordRecuperationUser)}>
        <div className="flex flex-col">
          <label className="text-fulvouscolor font-semibold" htmlFor="username">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && (<span className="text-red-600 text-sm">{errors.email.message}</span>)}
        </div>
        <button
          type="submit"
          className="bg-fulvouscolor rounded font-semibold text-gray-100 h-10 hover:bg-fulvoushover px-6 mt-2"
        >
          Enviar
        </button>
        <div className="flex flex-col items-center mt-1">
            <span className="text-center w-full text-gray-400 text-sm">Retornar para <a href="/" className="text-fulvoushover underline text-sm">login</a></span>
          </div>
      </form>
      {/* <pre className="text-black">{output}</pre> */}
    </>
  );
}
