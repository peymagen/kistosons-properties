import { Building2, Phone, Mail } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:7503979555" className="flex items-center gap-1 hover:text-red-100">
              <Phone size={14} />
              <span>7503979555, 9910904323</span>
            </a>
          </div>
          <div className="flex items-center gap-1 hover:text-red-100">
            <Mail size={14} />
            <a href="mailto:Kistosons@gmail.com">Kistosons@gmail.com</a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-red-600 p-2 rounded-full">
              <Building2 className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-red-600">KISTO ASSOCIATES</h1>
              <p className="font-bold">Property Consultants</p>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <li>
              {/* Scrolls to very top of page */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-red-600 transition"
              >
                Home
              </button>
            </li>
            <li>
              {/* Scrolls to properties section — add id="properties" to your properties <main> */}
              <button
                onClick={() => scrollToSection('properties')}
                className="hover:text-red-600 transition"
              >
                Properties
              </button>
            </li>
            <li>
              {/* Scrolls to partners section — add id="partners" to your <Partners /> wrapper */}
              <button
                onClick={() => scrollToSection('partners')}
                className="hover:text-red-600 transition"
              >
                About Us
              </button>
            </li>
            <li>
              {/* Scrolls to query form — add id="contact" to your <QueryForm /> wrapper */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-red-600 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}