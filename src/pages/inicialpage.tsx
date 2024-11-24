import { SetStateAction, useState } from "react";
import Logo from "../../public/capa_SGM2.png";
import { LoginCard } from "../components/logincard";
import { RegisterCard } from "../components/registercard";

export function InicialPage() {
  const [activeCard, setActiveCard] = useState("login");

  const toggleCard = (cardType: SetStateAction<string>) => {
    setActiveCard(cardType);
  };

  return (
    <div className="flex w-full h-screen bg-primarylemon">
      <div className="w-[60%] flex items-center justify-center">
        <img className="w-full h-full object-cover" src={Logo} alt="capa" />
      </div>
      <div className="w-[40%] text-white flex items-center justify-center">
        <div className="shadow-shape rounded-md w-[60%] h-auto bg-slate-200 p-6 flex flex-col items-center space-y-4">
          {/* Cabeçalho do Card */}
          <div className="flex flex-col items-center space-y-1">
            <h1 className="text-fulvouscolor font-bold text-3xl">
              {activeCard === "login" ? "Login" : "Cadastro"}
            </h1>
          </div>

          {/* Card de Login ou Cadastro */}
          {activeCard === "login" ? <LoginCard /> : <RegisterCard />}

          {/* Texto "Não possui conta?" ou "Já possui conta?" */}
          <div className="text-center w-full text-gray-400 text-sm mt-4">
            {activeCard === "login" ? (
              <>
                Não possui conta?{" "}
                <a
                  className="text-fulvoushover underline text-sm"
                  href="#"
                  onClick={() => toggleCard("register")}
                >
                  Registrar-se
                </a>
              </>
            ) : (
              <>
                Já possui conta?{" "}
                <a
                  className="text-fulvoushover underline text-sm"
                  href="#"
                  onClick={() => toggleCard("login")}
                >
                  Login
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
