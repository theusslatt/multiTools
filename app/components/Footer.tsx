"use client"

import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
              <img
                src="/images/multi-tools-logo.png" // Novo logo
                alt="Multi Tools Logo"
                className="h-12 mb-4 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas em injeção plástica para a indústria automotiva, oferecendo soluções de alta qualidade e
              precisão.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                R. Francisco Otaviano, 195 - Socorro - SP
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                (11) 5683-4200
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                contato@multitools.com.br
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Injeção Plástica
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Desenvolvimento de Moldes
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Controle de Qualidade
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Logística Integrada
                </a>
              </li>
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certificações</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#certificates"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#certificates")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors"
                >
                  IATF 16949
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#certificates")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors"
                >
                  ISO 14001
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Multi Tools Indústria e Comércio Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
