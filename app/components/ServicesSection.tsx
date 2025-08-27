import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Wrench, CheckCircle } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Injeção Plástica",
      description: "Produção de peças plásticas para o setor automotivo.",
      features: ["Injeção em PA, POM, ABS, PBT, PP, PE, TPE", "Controle de qualidade", "Produção em larga escala"],
    },
    {
      icon: Wrench,
      title: "Desenvolvimento de Moldes",
      description: "Projeto e fabricação de moldes customizados.",
      features: ["Softwares: CATIA, CAD, CAM", "Simulação de processo", "Manutenção preventiva"],
    },
    {
      icon: CheckCircle,
      title: "Controle de Qualidade",
      description: "Inspeção rigorosa em todas as etapas do processo produtivo.",
      features: ["Certificação IATF", "Testes dimensionais", "Rastreabilidade completa"],
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em injeção plástica, desde o desenvolvimento até a entrega final, sempre
            focados na excelência e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
