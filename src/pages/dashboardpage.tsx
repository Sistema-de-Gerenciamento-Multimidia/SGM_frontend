import { Header } from "../components/header"
// import  { HeroVideoDialogDemoTopInBottomOut }  from "../components/capa_video";
import { DialogDemo } from "@/components/button_upload";
import AudioPlayerComponent from "../components/audio_player_component";

export function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primarylemon">
      <Header />

      
      <main className="flex-grow p-6">
        
        <div className="mb-6">
          <DialogDemo />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-perfilcolor p-4 shadow rounded flex flex-col items-center gap-4"
            >
              {/* <HeroVideoDialogDemoTopInBottomOut /> */}
              <AudioPlayerComponent
                src="/audios/musicateste.mp3" 
                autoPlay={false} 
                loop={false}
                volume={0.5}
              />
              <p className="text-gray-600 font-semibold">Arquivo {index + 1}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
