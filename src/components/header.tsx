import { Link } from "react-router-dom";
import { FaCog, FaUserCircle } from "react-icons/fa";

export function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-fulvouscolor">Nome do App</h1>
      <input
        type="text"
        placeholder="Pesquisar arquivos..."
        className="flex-grow mx-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-fulvoushover"
      />
      <div className="flex items-center space-x-4">
        <FaCog className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
        <Link to="/perfil">
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-fulvoushover" />
        </Link>
      </div>
    </header>
  );
}
