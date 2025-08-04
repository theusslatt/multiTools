"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Certificados", href: "#certificates" },
    { label: "Clientes", href: "#clients" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/multitools-logo.jpg"
              alt="Multi Tools - Ferramentaria e Injeção de Plásticos"
              className="h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
