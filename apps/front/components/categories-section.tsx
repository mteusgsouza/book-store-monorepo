import Link from "next/link";
import { GENRE_LABELS } from "@/types/product";

const GENRE_SLUGS: Record<string, string> = {
  Fiction: "ficcao",
  NonFiction: "nao-ficcao",
  ScienceFiction: "ficcao-cientifica",
  Fantasy: "fantasia",
  Mystery: "misterio",
  Biography: "biografia",
  History: "historia",
  Romance: "romance",
  Thriller: "suspense",
  SelfHelp: "autoajuda",
};

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.005em] text-ink">
          Categorias
        </h2>
        <p className="mt-3 max-w-lg text-lg leading-relaxed text-steel">
          Navegue por generos e encontre o que mais combina com voce.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {Object.entries(GENRE_LABELS).map(([genre, label]) => (
            <Link
              key={genre}
              href={`/categorias/${GENRE_SLUGS[genre]}`}
              className="inline-flex items-center rounded-full border border-hairline bg-canvas px-4 py-2 text-sm font-medium text-steel hover:bg-ink hover:text-on-dark hover:border-ink transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
