import Link from "next/link";
import type { Product } from "@/types/product";
import { TYPE_OF_WORK_LABELS } from "@/types/product";
import { Badge } from "@workspace/ui/components/badge";

export function ProductCard({ product }: { product: Product }) {
  const typeLabel = product.type_of_work ? TYPE_OF_WORK_LABELS[product.type_of_work] : null;

  return (
    <Link href={`/produtos/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-hairline bg-canvas transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden bg-surface">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {typeLabel && (
            <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
              {typeLabel}
            </Badge>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold leading-snug text-ink line-clamp-2">
            {product.name}
          </h3>
          {product.authors.length > 0 && (
            <p className="mt-1 text-sm text-steel line-clamp-1">
              {product.authors.join(", ")}
            </p>
          )}
          <p className="mt-2 text-base font-semibold text-ink">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
