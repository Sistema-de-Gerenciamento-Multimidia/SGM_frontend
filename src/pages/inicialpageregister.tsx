import Logo from "../../public/capa_SGM2.png";
import { RegisterCard } from "../components/registercard";

export function InicialPageRegister() {
  
  return (
    <div className="flex w-full h-screen bg-primarylemon">
      <div className="w-[60%] flex items-center justify-center">
        <img className="w-full h-full object-cover" src={Logo} alt="capa" />
      </div>
      <div className="w-[40%] text-white flex items-center justify-center">
        <div className="shadow-shape rounded-md w-[60%] h-auto bg-slate-200 p-6 flex flex-col items-center space-y-4">
          {/* Cabeçalho do Card */}
          <div className="flex flex-col items-center space-y-1">
            <h1 className="text-fulvouscolor font-bold text-3xl">Cadastro</h1>
          </div>
          <RegisterCard />

          <div className="text-center w-full text-gray-400 text-sm mt-4">
            Já possui conta?{" "}
            <a className="text-fulvoushover underline text-sm" href="/">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}