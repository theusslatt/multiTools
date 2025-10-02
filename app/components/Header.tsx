"use client"

import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  // Calcula a altura do header dinamicamente
  useEffect(() => {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Certificados", href: "#certificates" },
    { label: "Clientes", href: "#clients" },
    { label: "Contato", href: "#contact" },
    { label: "Transparência", href: "/certificates/transparencia.pdf" },
  ]

  const handleScrollToSection = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - headerHeight - 20,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
            <img
              src="/images/multi-tools-logo.png"
              alt="Multi Tools - Ferramentaria e Injeção de Plásticos"
              className="h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isPdf = item.href.endsWith(".pdf");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  {...(isPdf
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {
                        onClick: (e) => {
                          e.preventDefault();
                          handleScrollToSection(item.href);
                        },
                      })}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {menuItems.map((item) => {
              const isPdf = item.href.endsWith(".pdf");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  {...(isPdf
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {
                        onClick: (e) => {
                          e.preventDefault();
                          handleScrollToSection(item.href);
                        },
                      })}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
