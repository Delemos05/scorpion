export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com gestão de produtos e vendas.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80'
    },
    {
      title: 'Banking App',
      description: 'Aplicativo móvel para gestão financeira pessoal.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80'
    },
    {
      title: 'Healthcare System',
      description: 'Sistema integrado para gestão de clínicas e hospitais.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Portfólio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e as soluções que
            entregamos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}