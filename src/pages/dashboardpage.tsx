import { Header } from "../components/header";
// import  { HeroVideoDialogDemoTopInBottomOut }  from "../components/capa_video";
import { DialogDemo } from "@/components/button_upload";
import AudioPlayerComponent from "../components/audio_player_component";
import { FileInfomations } from "@/components/file_infomations";
import { SelectDemo } from "@/components/select_file_filter";
import { AlertDialogDemo } from "@/components/alert_dialog";
import { DialogEditDemo } from "@/components/edit_file_informations";
// import { DialogImageDemo } from "@/components/image_component";

export function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primarylemon">
      <Header />

      <main className="flex-grow p-6">
        <div className="mb-6 flex items-center justify-between">
          <DialogDemo />
          <SelectDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-perfilcolor p-4 shadow rounded flex flex-col items-center gap-4"
            >
              {/* <DialogImageDemo /> */}
              {/* <HeroVideoDialogDemoTopInBottomOut /> */}
              <AudioPlayerComponent
                src="/audios/musicateste.mp3"
                autoPlay={false}
                loop={false}
                volume={0.5}
              />
              <div className="w-full flex justify-between px-2">
                <button>
                  <DialogEditDemo />
                </button>
                <p className="text-gray-600 font-semibold">Arquivo {index + 1}</p>
                <button>
                  <AlertDialogDemo />
                </button>
              </div>
              <hr className="w-full border-gray-200" />
              <FileInfomations />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
