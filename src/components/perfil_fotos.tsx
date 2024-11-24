// src/components/Fotos.tsx

export function Fotos() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-blue-200 h-40 rounded flex items-center justify-center">
            <p>Foto {index + 1}</p>
          </div>
        ))}
      </div>
    );
  }
  