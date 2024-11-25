import { Globe, Smartphone, Database, Cloud, Code, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web responsivas e modernas com as últimas tecnologias.'
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android.'
    },
    {
      icon: Database,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para as necessidades específicas do seu negócio.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Implementação e gerenciamento de soluções em nuvem.'
    },
    {
      icon: Code,
      title: 'Integração de APIs',
      description: 'Desenvolvimento e integração de APIs para conectar sistemas.'
    },
    {
      icon: Settings,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada em tecnologia e desenvolvimento.'
    }
  ];

  return (
    <section id="services" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento para
            atender às suas necessidades tecnológicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <service.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}