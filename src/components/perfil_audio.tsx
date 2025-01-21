import AudioPlayerComponent from "./audio_player_component"; // Ajuste o caminho conforme necessário
import { Pencil } from "lucide-react";
import { AlertDialogDemo } from "@/components/alert_dialog";
import { FileInfomations } from "@/components/file_infomations";

export function Audio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-perfilcolor p-4 rounded  flex flex-col items-center gap-4 shadow-both"
        >
          <AudioPlayerComponent
                src="/audios/musicateste.mp3"
                autoPlay={false}
                loop={false}
                volume={0.5} 
          />
          <div className="w-full flex justify-between px-2">
            <button>
              <Pencil size={20} className="text-gray-600 hover:text-gray-800" />
            </button>
            <p className="text-gray-600 font-semibold">Áudio {index + 1}</p>
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
