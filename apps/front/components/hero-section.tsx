export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-dark-from to-hero-dark-to py-20 md:py-28 lg:py-[120px] text-on-dark">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Sua proxima leitura<br />comeca aqui
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
            Explore milhares de livros, mangas e revistas. Encontre sua proxima historia favorita.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center rounded-full bg-on-dark px-5 py-2.5 text-sm font-medium text-ink hover:bg-on-dark/90 transition-colors"
            >
              Explorar Catalogo
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center rounded-full border border-on-dark/30 px-5 py-2.5 text-sm font-medium text-on-dark hover:border-on-dark/60 transition-colors"
            >
              Ver Categorias
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
    </section>
  );
}
