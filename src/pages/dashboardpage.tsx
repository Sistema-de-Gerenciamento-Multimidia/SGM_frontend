import { Header } from "../components/header"
import  { HeroVideoDialogDemoTopInBottomOut }  from "../components/capa_video";

export function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primarylemon">
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
              className="bg-perfilcolor p-4 shadow rounded flex flex-col items-center gap-4"
            >
              <HeroVideoDialogDemoTopInBottomOut />
              <p className="text-gray-600 font-semibold">Arquivo {index + 1}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
