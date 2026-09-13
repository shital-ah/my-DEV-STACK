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

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Icon + Badge */}
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-slate-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating + Button */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>

          <span className="font-bold text-slate-800">
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-green-100 text-green-700"
              : "gradient-bg text-white hover:scale-105"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
        </button>

      </div>
    </div>
  );
}

export default TechnologyCard;