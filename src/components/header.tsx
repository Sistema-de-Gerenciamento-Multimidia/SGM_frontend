import { Link, useNavigate } from "react-router-dom";
import { FaCog, FaUserCircle } from "react-icons/fa";
import { LogOut } from "lucide-react";

export function Header() {
  const navigate = useNavigate();

  function logOut() {
    // Remove dados do sessionStorage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");

    navigate("/");
  }

  return (
    <header className="bg-primarylemon shadow-shape p-4 flex items-center justify-between">
      <Link to="/dashboard">
        <h1 className="text-3xl font-bold text-fulvouscolor">Contentify</h1>
      </Link>
      <input
        type="text"
        placeholder="Pesquisar arquivos..."
        className="flex-grow mx-4 px-3 py-2 rounded border border-gray-500 bg-transparent text-gray-500 placeholder-gray-500 focus:outline-none focus:border-fulvoushover"
      />
      <div className="flex items-center space-x-4">
        <FaCog className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
        <Link to="/perfil">
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
        </Link>
        <button onClick={logOut}>
          <LogOut className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
        </button>
      </div>
    </header>
  );
}
