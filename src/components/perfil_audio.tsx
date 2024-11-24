// src/components/Audio.tsx

export function Audio() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-green-200 h-20 rounded flex items-center justify-center">
            <p>Áudio {index + 1}</p>
          </div>
        ))}
      </div>
    );
  }
  