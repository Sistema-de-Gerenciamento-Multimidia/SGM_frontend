import { Header } from "../components/header"

export function DashboardPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      
      <main className="flex-grow p-6">
        
        <div className="mb-6">
          <button className="bg-fulvouscolor text-white px-4 py-2 rounded shadow hover:bg-fulvoushover">
            + Adicionar novo arquivo multimídia
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow rounded flex flex-col items-center"
            >
              <div className="h-32 w-full bg-gray-300 rounded mb-4"></div>
              <p className="text-gray-600 font-semibold">Arquivo {index + 1}</p>
              <button className="mt-2 text-fulvouscolor text-sm underline">
                Visualizar
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
