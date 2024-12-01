import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUser } from "../UserContext"; // Importando o hook para acessar o contexto
import {UserData} from "../dataUser/userData";
// import { createUser } from "../dataUser/functionData";
import { api } from "../api/token";

const loginUserFormSchema = z.object({
  username: z.string().nonempty("O nome é obrigatório!").min(6, "O username precisa de no mínimo 6 caracteres!"),
  password: z.string().min(8, "A senha precisa de no mínimo 8 caracteres!"),
});


type loginUserFormData = z.infer<typeof loginUserFormSchema>;

export function LoginCard() {
  const { register, handleSubmit, formState: { errors } } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  const navigate = useNavigate();
  const { setUser } = useUser(); // Pegando a função de atualização do contexto

  const loginUser = async (data: loginUserFormData) => {
    try {
      const response = await api.post('/authentication/token/', data);
      sessionStorage.setItem("token", response.data.access);

      const idUsuario = sessionStorage.getItem("user_id");
      const dados = await api.get<UserData>(`/users/${idUsuario}/`);

      const userData = { 
        id: dados.data.id,
        email: dados.data.email,
        username: dados.data.username,
        name: dados.data.name,
        description: dados.data.description,
        date_joined: dados.data.date_joined,
        date_of_birth: dados.data.date_of_birth,
        profile_picture: dados.data.profile_picture
      };
      console.log(userData)
      setUser(userData); // Atualizando os dados do usuário no contexto
      navigate("/dashboard");
     


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
    <form className="flex flex-col w-full max-w-xs gap-3" onSubmit={handleSubmit(onSubmit)}>
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
  );
}