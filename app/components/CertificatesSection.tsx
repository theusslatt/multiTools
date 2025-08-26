import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, CheckCircle2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificatesSection() {
  const certificates = [
    {
      name: "IATF 16949",
      description: "Sistema de Gestão da Qualidade Automotiva",
      details: "Certificado BR038857 - Válido até 26/09/2025",
      icon: Award,
      pdfPath: "/certificates/iatf-16949.pdf",
    },
    {
      name: "ISO 14001",
      description: "Sistema de Gestão Ambiental",
      details: "Política integrada qualidade e ambiental",
      icon: CheckCircle2,
      pdfPath: "/certificates/iso-14001.pdf",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certificações e Qualidade</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso compromisso com a excelência é comprovado através de certificações internacionais que garantem os mais
            altos padrões de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex flex-col items-center">
                <cert.icon className="mx-auto mb-4 text-blue-600" size={64} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-2">{cert.description}</p>
                <p className="text-sm text-blue-600 mb-4">{cert.details}</p>
                {cert.pdfPath && (
                  <Button asChild variant="outline" className="mt-auto bg-transparent">
                    <a href={cert.pdfPath} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2" size={18} />
                      Visualizar Certificado
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Compromisso com a Excelência</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Mantemos rigorosos padrões de qualidade em todos os nossos processos, desde a matéria-prima até o produto
            final, garantindo total conformidade com as especificações técnicas e normas internacionais.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Conformidade</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-700">Defeitos PPM</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Controle de Qualidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
