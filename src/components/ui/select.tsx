import { useEffect, useState, useRef } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { EditProfileModal } from "../perfil_edit";

interface CustomSelectProps {
  profileData: {
    nome: string;
    bio: string;
    seguidores: number;
    seguindo: number;
    fotoPerfil: string;
  };
  setProfileData: (updatedData: {
    nome: string;
    bio: string;
    seguidores: number;
    seguindo: number;
    fotoPerfil: string;
  }) => void;
}

export function CustomSelect({ profileData, setProfileData }: CustomSelectProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSave = (updatedData: typeof profileData) => {
    setProfileData(updatedData);
    setIsEditModalOpen(false);
    toast.success("Alterações salvas com sucesso!");
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        console.log("Clique fora detectado");
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
            className="text-white hover:bg-fulvoushover cursor-pointer p-2 rounded flex justify-center"
            onClick={() => setIsDropdownOpen(false)}
          >
            Compartilhar
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <EditProfileModal
          profileData={profileData}
          setProfileData={handleSave}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
}