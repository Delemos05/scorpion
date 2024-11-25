import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Scorpion Technology</span>
            </div>
            <p className="text-gray-400">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500">Sobre</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-500">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Apps Mobile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Sistemas Personalizados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@scorpiontech.com.br</li>
              <li>(11) 9999-9999</li>
              <li>Av. Paulista, 1000<br />São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scorpion Technology. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}