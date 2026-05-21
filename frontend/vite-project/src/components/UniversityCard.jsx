import { MapPin, IndianRupee, Award, Tag } from "lucide-react";

export default function UniversityCard({ university }) {
  const {
    name,
    state,
    city,
    fees_category,
    programs = [],
    ranking,
    type,
    tags = [],
    reason_template,
  } = university;

  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-2xl border border-zinc-200 p-6 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 leading-tight">
              {name}
            </h2>
            <div className="flex items-center gap-1 mt-1 text-zinc-500 text-sm">
              <MapPin size={14} />
              <span>
                {city}, {state}
              </span>
            </div>
          </div>
          {ranking && (
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold shrink-0">
              <Award size={14} />
              <span>#{ranking}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium">
            <IndianRupee size={12} />
            {fees_category}
          </span>
          <span className="bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-full text-xs font-medium">
            {type}
          </span>
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">
            <Tag size={12} />
            Programs
          </div>
          <div className="flex flex-wrap gap-1.5">
            {programs.map((p) => (
              <span
                key={p}
                className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {reason_template && (
        <div className="bg-zinc-50 border-l-4 border-blue-500 p-3 rounded-r">
          <p className="text-sm text-zinc-700 italic leading-relaxed">
            {reason_template}
          </p>
        </div>
      )}
    </div>
  );
}
