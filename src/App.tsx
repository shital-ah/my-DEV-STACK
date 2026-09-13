import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechnologyGrid from "./components/technologyGrid";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-purple-600"></div>

              <p className="font-medium text-slate-600">
                Loading technologies...
              </p>
            </div>
          </div>
        ) : (
          <TechnologyGrid technologies={technologies} />
        )}
      </main>
    </div>
  );
}

export default App;