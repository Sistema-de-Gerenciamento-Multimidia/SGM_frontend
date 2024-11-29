/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Esquema de validação
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
  password: z.string().min(8, "A senha precisa de no mínimo 8 caracteres!")
  .refine((password) => !/^\d+$/.test(password), {
    message: "A senha não pode ser somente de números!",
  }),
  confirm_password: z
    .string()
    .min(8, "A senha precisa de no mínimo 8 caracteres!"),
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas precisam ser iguais!",
  path: ["confirm_password"], // Campo onde o erro será exibido
});


const api = axios.create({
  baseURL: 'https://sgm-backend-test.onrender.com/api/v1',
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function RegisterCard() {
  const [message, ] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const navigate = useNavigate();

  // Função para enviar os dados ao backend
  const registerUser = async (data: CreateUserFormData) => {
    try {
      const response = await api.post('/users/', data);
      // setMessage("Usuário cadastrado com sucesso!");

      navigate("/");
      toast.success("Cadastro realizado com sucesso!");
      console.log("Resposta do servidor:", response.data);
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error.response?.data || error.message);
      // setMessage("Erro ao cadastrar usuário.");
    }
  };

  // Função chamada ao enviar o formulário
  const onSubmit = (data: CreateUserFormData) => {
    registerUser(data);
  };

  return (
    <>
      <form className="flex flex-col w-full max-w-xs gap-3" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex flex-col">
          <label className="text-fulvouscolor font-bold" htmlFor="confirm_password">
            Confirmar senha
          </label>
          <input
            type="password"
            id="confirm_password"
            className="outline-none rounded h-10 px-3 bg-gray-400 text-white placeholder-gray-100"
            placeholder="Confirme sua senha"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <span className="text-red-600 text-sm">{errors.confirm_password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-fulvouscolor rounded font-semibold text-gray-100 h-10 hover:bg-fulvoushover px-6"
        >
          Cadastrar
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}