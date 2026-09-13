import { useEffect, useState } from "react";

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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-purple-600"></div>

          <p className="font-medium text-slate-600">
            Loading technologies...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="mb-4 text-4xl font-bold">
        Dev <span className="brand-gradient">Stack</span>
      </h1>

      <p className="mb-8 text-slate-600">
        Total Technologies: {technologies.length}
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="rounded-2xl bg-white p-6 shadow"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="mb-4 h-14 w-14 object-contain"
            />

            <h2 className="text-xl font-bold">
              {technology.name}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {technology.description}
            </p>

            <p className="mt-3 text-sm font-semibold text-purple-600">
              {technology.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;