import { Dashboard } from "../components/dashboard";
import { MultimediaSection } from "../components/multimediaSection";

export function Home() {
  return (
    <div className="flex w-full h-screen">
      <Dashboard />
      <MultimediaSection />
    </div>
  );
}

export default Home;
