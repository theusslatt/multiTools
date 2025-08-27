import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, MessageCircleQuestionMark, Clock } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Francisco Otaviano, Nº 195\nSocorro - CEP: 04763-150\nSão Paulo - SP",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 5683-4200",
    },
    {
      icon: MessageCircleQuestionMark,
      title: "WhatsApp",
      link: "https://wa.me/5511914526205",
      button: "Fale Conosco",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta\n07:00 às 17:00",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades em injeção plástica. Entre em contato conosco e descubra como
            podemos ser seu parceiro estratégico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <info.icon className="text-blue-600 mr-3" size={24} />
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    {info.button && info.link && (
                      <a
                        className="inline-flex gap-2 mt-2 px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <info.icon size={20} className="text-white" /> {info.button}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Localização</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.1452165302253!2d-46.7196981!3d-23.670764299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51b834c3ec09%3A0x26031d4bc02414fc!2sMulti%20Tools%20Ind%C3%BAstria%20e%20Com%C3%A9rcio%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1754339158648!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
