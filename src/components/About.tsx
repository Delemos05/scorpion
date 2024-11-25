import { Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções
            inovadoras que impulsionam o sucesso dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Missão</h3>
            <p className="text-gray-600">
              Desenvolver soluções tecnológicas que transformam e simplificam
              a vida das pessoas e empresas.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Equipe</h3>
            <p className="text-gray-600">
              Profissionais altamente qualificados com vasta experiência
              em desenvolvimento de software.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <p className="text-gray-600">
              Comprometimento, inovação, qualidade e transparência
              em tudo que fazemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}