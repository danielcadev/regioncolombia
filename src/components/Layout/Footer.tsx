import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Nuestra historia</a></li>
              <li><a href="#" className="hover:text-gray-900">Equipo</a></li>
              <li><a href="#" className="hover:text-gray-900">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Desarrollo web</a></li>
              <li><a href="#" className="hover:text-gray-900">Diseño UX/UI</a></li>
              <li><a href="#" className="hover:text-gray-900">Marketing digital</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: info@ejemplo.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Calle Principal 123, Ciudad</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p>&copy; 2024 Regiossoft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;