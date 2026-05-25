import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { PromoBanner } from "@/components/promo-banner";
import { FeaturedProductsSection } from "@/components/featured-products-section";
import { TypeSection } from "@/components/type-section";
import { CategoriesSection } from "@/components/categories-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <HeroSection />
        <PromoBanner />

        <section id="produtos" className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.005em] text-ink">
              Lancamentos
            </h2>
            <p className="mt-3 max-w-lg text-lg leading-relaxed text-steel">
              Os titulos mais recentes adicionados a nossa colecao.
            </p>
            <div className="mt-10">
              <FeaturedProductsSection limit={4} />
            </div>
          </div>
        </section>

        <TypeSection typeOfWork="Book" title="Livros" />
        <TypeSection typeOfWork="Comic" title="Quadrinhos" />
        <TypeSection typeOfWork="Game" title="Games" />
        <TypeSection typeOfWork="eBook" title="eBooks" />

        <CategoriesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
