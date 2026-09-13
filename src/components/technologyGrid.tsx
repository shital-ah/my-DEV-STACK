import TechnologyCard from "./technologyCard";

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

interface TechnologyGridProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

function TechnologyGrid({
  technologies,
  stack,
  onAdd,
}: TechnologyGridProps) {
  return (
    <section id="technologies">
      {/* Section Heading */}
      <div className="mb-8">
        <p className="mb-2 font-semibold uppercase tracking-wider text-purple-600">
          Explore
        </p>

        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Technologies
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Explore modern technologies and choose the ones you
          want to use in your development stack.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={stack.some(
              (item) => item.id === technology.id
            )}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}

export default TechnologyGrid;