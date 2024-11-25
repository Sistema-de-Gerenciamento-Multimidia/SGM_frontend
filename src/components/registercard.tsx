import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório!")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  username: z
    .string()
    .nonempty("O nome é obrigatório!")
    .min(6, "O username precisa de no mínimo 6 caracteres!"),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Formato de email inválido")
    .toLowerCase(),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres!"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function RegisterCard() {
  const [, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data: CreateUserFormData) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <form className="flex flex-col w-full max-w-xs gap-3"  onSubmit={handleSubmit(createUser)}>
        <div className="flex flex-col">
          <label className="text-fulvouscolor font-semibold" htmlFor="fullname">
            Nome Completo
          </label>
          <input
            type="text"
            id="fullname"
            className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
            placeholder="Digite seu nome completo"
            {...register("name")}
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </div>
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
          <label className="text-fulvouscolor font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
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
        </div>
        <button
          type="submit"
          className="bg-fulvouscolor rounded font-semibold text-gray-100 h-10 hover:bg-fulvoushover px-6"
        >
          Cadastrar
        </button>
      </form>
      {/* <pre className="text-black">{output}</pre> */}
    </>
  );
}
