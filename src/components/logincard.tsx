// import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const loginUserFormSchema = z.object({
  username: z.string().nonempty("O nome é obrigatório!").min(6, "O username precisa de no mínimo 6 caracteres!"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres!"),
});

const api = axios.create({
  baseURL: 'https://sgm-backend-test.onrender.com/api/v1',
});



type loginUserFormData = z.infer<typeof loginUserFormSchema>;

export function LoginCard() {
  // const [, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  const navigate = useNavigate();


  // function loginUser(data: loginUserFormData) {
  //   setOutput(JSON.stringify(data, null, 2));
  // }

  const loginUser = async (data: loginUserFormData) => {
    try {
      const response = await api.post('/authentication/token/', data);
      navigate("/dashboard");
      console.log("Resposta do servidor:", response.data);
      sessionStorage.setItem("token",response.data.access)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error('Nome de Usuário e/ou senha inválidos!');
      console.error("Erro ao logar usuário:", error.response?.data || error.message);
    }
  };

  const onSubmit = (data: loginUserFormData) => {
    loginUser(data);
  };

  return (
    <>
      <form className="flex flex-col w-full max-w-xs gap-3"  onSubmit={handleSubmit(onSubmit)}>
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
            <a href="/password_recuperation" className="text-fulvoushover underline text-sm">
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
      {/* <pre className="text-black">{output}</pre> */}
    </>
  );
}
