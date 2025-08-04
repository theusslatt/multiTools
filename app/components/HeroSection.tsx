"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Award, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Excelência em
                <span className="text-blue-600 block">Injeção Plástica</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Soluções especializadas para a indústria automotiva com mais de 20 anos de experiência, qualidade
                certificada e tecnologia de ponta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça nossos serviços
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entre em contato
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Factory className="mx-auto mb-2 text-blue-600" size={32} />
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 text-blue-600" size={32} />
                <div className="text-2xl font-bold text-gray-900">ISO</div>
                <div className="text-sm text-gray-600">Certificações</div>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-blue-600" size={32} />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Setor automotivo</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/images/fabrica-multitools.jpg" alt="Fábrica Multitools" className="rounded-lg shadow-2xl" />
            <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
