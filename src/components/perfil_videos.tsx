import { HeroVideoDialogDemoTopInBottomOut } from './capa_video';
import { Pencil } from "lucide-react";
import { AlertDialogDemo } from "@/components/alert_dialog";
import { FileInfomations } from "@/components/file_infomations";

export function Videos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-perfilcolor p-4 rounded flex flex-col items-center gap-4 "
        >
          <HeroVideoDialogDemoTopInBottomOut />
          <div className="w-full flex justify-between px-2">
            <button>
              <Pencil size={20} className="text-gray-600 hover:text-gray-800" />
            </button>
            <p className="text-gray-600 font-semibold">Vídeo {index + 1}</p>
            <button>
              <AlertDialogDemo />
            </button>
          </div>

          <hr className="w-full border-gray-200" />

          <FileInfomations />
        </div>
      ))}
    </div>
  );
}
