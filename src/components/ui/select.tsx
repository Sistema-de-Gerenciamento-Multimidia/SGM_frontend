import { useEffect, useState, useRef } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
// import { toast } from "sonner";
import { EditProfileModal } from "../perfil_edit";
import { Modal_Password } from "../modal_password";
// import { useUser } from "../../userContext";  // Importando o hook para acessar o contexto

export function CustomSelect() {
  // const { setUser } = useUser();  // Pegando a função para atualizar os dados do usuário
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        aria-label="Options"
      >
        <DotsHorizontalIcon className="w-6 h-6 text-gray-600" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-400 rounded shadow-lg p-4 z-10">
          <div
            className="text-white hover:bg-fulvoushover cursor-pointer p-2 rounded flex justify-center"
            onClick={() => {
              setIsDropdownOpen(false);
              setIsEditModalOpen(true);
            }}
          >
            Alterar Perfil
          </div>
          <div
            className="text-white hover:bg-red-600 cursor-pointer p-2 rounded flex justify-center"
            onClick={() => {
              setIsDropdownOpen(false);
              setIsPasswordModalOpen(true);
            }}
          >
            Alterar Senha
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <EditProfileModal
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isPasswordModalOpen && (
        <Modal_Password onClose={() => setIsPasswordModalOpen(false)} />
      )}
    </div>
  );
}
