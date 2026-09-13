import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechnologyGrid from "./components/technologyGrid";

import YourStack from "./components/yourStack";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
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

  // Add technology to stack
  const addToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack([...stack, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

 const removeFromStack = (id: string) => {
  const removedTechnology = stack.find(
    (item) => item.id === id
  );

  setStack(stack.filter((item) => item.id !== id));

  if (removedTechnology) {
    toast.info(`${removedTechnology.name} removed from your stack.`);
  }
};

const removeAll = () => {
  if (stack.length === 0) {
    toast.warning("Your stack is already empty!");
    return;
  }

  setStack([]);

  toast.info("All technologies removed from your stack.");
};

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
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_320px]">

  <TechnologyGrid
    technologies={technologies}
    stack={stack}
    onAdd={addToStack}
  />

  <YourStack
    stack={stack}
    onRemove={removeFromStack}
    onRemoveAll={removeAll}
  />

</div>
        )}
      </main>

      <ToastContainer position="top-right"/>

    </div>
  );
}

export default App;