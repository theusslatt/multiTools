export default function ClientsSection() {
  const clients = ["Volkswagen", "General Motors", "Ford", "Fiat Chrysler", "Toyota", "Honda", "Hyundai", "Renault"]

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos parceiros das principais montadoras do mercado brasileiro, fornecendo soluções que atendem aos mais
            rigorosos padrões de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={`/placeholder.svg?height=80&width=120&text=${client}`}
                  alt={`Logo ${client}`}
                  className="mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcerias de Longo Prazo</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Construímos relacionamentos duradouros baseados na confiança, qualidade e cumprimento de prazos. Nossos
              clientes sabem que podem contar conosco para soluções inovadoras e entregas pontuais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
