export function MultimediaSection() {
    const multimediaItems = [
      { id: 1, type: 'image', src: '/path/to/image1.jpg' },
      { id: 2, type: 'video', src: '/path/to/video1.mp4' },
      { id: 3, type: 'audio', src: '/path/to/audio1.mp3' },
    ];
  
    return (
      <div className="w-3/4 bg-white p-6">
        <h2 className="text-2xl font-bold mb-6">Multimídias</h2>
        <div className="grid grid-cols-3 gap-6">
          {multimediaItems.map((item) => (
            <div key={item.id} className="bg-gray-200 h-48 flex items-center justify-center">
              {item.type === 'image' && <img src={item.src} alt={`Multimídia ${item.id}`} />}
              {item.type === 'video' && (
                <video controls className="w-full h-full">
                  <source src={item.src} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              )}
              {item.type === 'audio' && (
                <audio controls>
                  <source src={item.src} type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default MultimediaSection;
  