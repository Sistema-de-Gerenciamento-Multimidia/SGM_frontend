import { Header } from "../components/header"
import  { HeroVideoDialogDemoTopInBottomOut }  from "../components/capa_video";
import { HeroAudioDialogDemoTopInBottomOut } from "../components/capa_audio";
import { DialogDemo } from "@/components/button_upload";
 

export function DashboardPage() {
  const totalItems = 8;

  return (
    <div className="flex flex-col min-h-screen bg-primarylemon">
      <Header />

<main className="flex-grow p-6">
  <div className="mb-6">
    <DialogDemo />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: totalItems }).map((_, index) => {
      const isVideo = index % 2 === 0;
      return (
        <div
          key={index}
          className="bg-perfilcolor p-4 shadow rounded flex flex-col items-center justify-center gap-4 relative"
        >
          {isVideo ? (
            <HeroVideoDialogDemoTopInBottomOut />
          ) : (
            <>
              <HeroAudioDialogDemoTopInBottomOut />
            </>
          )}  
          <p className="text-gray-600 font-semibold">
            {isVideo
              ? `Vídeo ${Math.floor(index / 2) + 1}`
              : `Áudio ${Math.floor(index / 2) + 1}`}
          </p>
        </div>
      );
    })}
  </div>
</main>
</div>
);
}
