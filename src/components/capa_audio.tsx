import HeroAudioDialog from "./ui/hero-audio-dialog"; // Importando um ícone de áudio alternativo

export function HeroAudioDialogDemoTopInBottomOut() {
  return (
    <div className="flex space-x-4">
      {/* Usando o ícone padrão de play */}
      <HeroAudioDialog
        className="w-full h-full flex items-center justify-center dark:hidden block"
        animationStyle="top-in-bottom-out"
        audioSrc="/audios/audio1.mp3"
        thumbnailSrc="/public/audio_thumb.png"
        thumbnailAlt="Hero Audio"
      />
      {/* Usando um ícone personalizado (por exemplo, Volume2) */}
      <HeroAudioDialog
        className="w-full h-full flex items-center justify-center hidden dark:block"
        animationStyle="top-in-bottom-out"
        audioSrc="/audios/audio1.mp3"
        thumbnailSrc="/public/audio_thumb.png"
        thumbnailAlt="Hero Audio"
      />
    </div>
  );
}
