export function PromoBanner() {
  return (
    <section className="bg-surface-code">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-8 py-3 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm font-medium text-on-dark">
          Frete gratis para todo Brasil em compras acima de R$ 100,00
        </p>
        <a
          href="#produtos"
          className="inline-flex items-center rounded-full border border-on-dark/30 px-4 py-1.5 text-sm font-medium text-on-dark hover:border-on-dark/60 transition-colors"
        >
          Ver Ofertas
        </a>
      </div>
    </section>
  );
}
