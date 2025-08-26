export default function ClientsSection() {
  const clients = [
    { sector: "", name: "U-Shin", logo: "/images/clients/minebea-logo.png" },
    { sector: "", name: "Honda Lock", logo: "/images/clients/minebea-logo.png" },
    { sector: "Automotivo", name: "Clusters", logo: "/images/clients/continental-logo.png" },
    { sector: "Automotivo", name: "Sistemas Frenagem", logo: "/images/clients/continental-logo.png" },
    { sector: "", name: "Intertrim/Trimtec", logo: "/images/clients/antolin-logo.png" },
    { sector: "", name: "Iramec", logo: "/images/clients/antolin-logo.png" },
    { sector: "Sistemas de Limpadores", name: "Wipers - Campinas", logo: "/images/clients/valeo-logo.png" },
    { sector: "Climatização", name: "Itatiba", logo: "/images/clients/valeo-logo.png" },
    { sector: "Powertrain - THS", name: "Itatiba", logo: "/images/clients/valeo-logo.png" },
    { sector: "Sistemas Elétricos - VCC", name: "Campinas", logo: "/images/clients/valeo-logo.png" },
    { sector: "Módulos de Coluna", name: "Tunisia", logo: "/images/clients/valeo-logo.png" },
    { sector: "Dispositivos Inteligentes", name: "Veszprém - Hungria", logo: "/images/clients/valeo-logo.png" },
    { sector: "", name: "Mauá", logo: "/images/clients/saint-gobain-logo.png" },
    { sector: "", name: "Goiana", logo: "/images/clients/saint-gobain-logo.png" },
    { sector: "", name: "Gravataí", logo: "/images/clients/saint-gobain-logo.png" },
    { sector: "", name: "México", logo: "/images/clients/saint-gobain-logo.png" },
    { sector: "", name: "Guagan", logo: "/images/clients/guangan-logo.jpg" },
    { sector: "", name: "Litens", logo: "/images/clients/litens-logo.jpg" },
    { sector: "", name: "Giobert", logo: "/images/clients/giobert-logo.jpg" },
    { sector: "", name: "Ática", logo: "/images/clients/atica-logo.png" },
    { sector: "", name: "Trico", logo: "/images/clients/trico-logo.jpg" },
    { sector: "", name: "Tecfil", logo: "/images/clients/tecfil-logo.png" },
    { sector: "", name: "Hydro", logo: "/images/clients/hydro-logo.png" },
    { sector: "", name: "Stellwag", logo: "/images/clients/stellwag-logo.png" },
  ]

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos parceiros das principais sistemistas do mercado, fornecendo soluções que atendem aos padrões de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`Logo ${client.name}`}
                  className="mx-auto h-16 object-contain grayscale hover:grayscale-0 transition-all" // Ajustado para melhor visualização de logos
                />
                <h4>{client.sector}</h4>
                <p>{client.name}</p>
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
