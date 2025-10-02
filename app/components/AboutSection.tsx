import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Cog } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Viabilizar projetos inovadores dos nossos clientes por meio  da construção de moldes e produção de peças plásticas contribuindo para o desenvolvimento da indústria automotiva brasileira.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser uma empresa sólida,  competitiva e estar entre os melhores fornecedores  de peças plásticas mundiais.",
    },
    {
      icon: Cog,
      title: "Valores",
      description: "Atuar com responsabilidade social, ambiental, transparência e ética.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sobre a Multi Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fundada com o propósito de atender exclusivamente ao setor automotivo, a Multi Tools se consolidou como
            parceira estratégica dos principais sistemistas da Indústria Automotiva do país.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <value.icon className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Nossa História</h3>
              <div className="space-y-4 text-gray-600">
                <p className="text-justify">
                  Com mais de três décadas de atuação no mercado, a Multi Tools nasceu da visão de especializar-se
                  exclusivamente no segmento automotivo, oferecendo soluções personalizadas.
                </p>
                <p className="text-justify">
                  Nossa trajetória é marcada por investimentos constantes em tecnologia, capacitação de equipe e
                  melhoria contínua dos processos, sempre mantendo o foco na satisfação total dos nossos clientes.
                </p>
                <p className="text-justify">
                  Hoje, somos reconhecidos como fornecedor confiável por nossos clientes, contribuindo para a
                  qualidade e inovação da indústria automotiva brasileira.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/multi-tools-logo.png"
                alt="Logo Multi Tools"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
