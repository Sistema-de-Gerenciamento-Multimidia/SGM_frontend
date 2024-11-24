import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserFormSchema = z.object({
  username: z.string().nonempty("O nome é obrigatório!").min(6, "O username precisa de no mínimo 6 caracteres!"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres!"),
});

type loginUserFormData = z.infer<typeof loginUserFormSchema>;

export function LoginCard() {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  function loginUser(data: loginUserFormData) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <form className="flex flex-col w-full max-w-xs gap-3"  onSubmit={handleSubmit(loginUser)}>
        <div className="flex flex-col">
          <label className="text-fulvouscolor font-semibold" htmlFor="username">
            Nome de Usuário
          </label>
          <input
            type="text"
            id="username"
            className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
            placeholder="Digite seu nome de usuário"
            {...register("username")}
          />
          {errors.username && <span className="text-red-600 text-sm">{errors.username.message}</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-fulvouscolor font-bold" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
            placeholder="Digite sua senha"
            {...register("password")}
          />
           {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
          <div className="flex flex-col items-center mt-2">
            <a href="#" className="text-fulvoushover underline text-sm">
              Esqueci minha senha
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="bg-fulvouscolor rounded font-semibold text-gray-100 h-10 hover:bg-fulvoushover px-6"
        >
          Entrar
        </button>
      </form>
      <pre className="text-black">{output}</pre>
    </>
  );
}
