import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transformando ideias em
              <span className="text-orange-500"> soluções digitais</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Desenvolvemos software sob medida para impulsionar seu negócio ao próximo nível,
              combinando inovação tecnológica com excelência em desenvolvimento.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
            >
              Solicite um orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}