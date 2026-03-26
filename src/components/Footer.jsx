const links = [
  { label: 'Sobre Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Contacto', href: '#contact' },
]

const handleScroll = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Logo y descripción */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path
                    d="M12 2C8 2 4.5 5 4.5 9c0 2.5 1.2 4.7 3 6.1V17h9v-1.9c1.8-1.4 3-3.6 3-6.1C19.5 5 16 2 12 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 17v2a3 3 0 0 0 6 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-widest text-white">CRISALIS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empresa tratadora de residuos líder en la Patagonia, comprometida con la economía circular
              y el desarrollo sostenible.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-emerald-500 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Operativa en Río Negro, Neuquén y Nación
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contacto Rápido</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 text-xs mb-0.5">Administración</span>
                +54 299 477 1888
              </li>
              <li>
                <span className="block text-gray-500 text-xs mb-0.5">Comercial</span>
                +54 299 546 2173
              </li>
              <li>
                <span className="block text-gray-500 text-xs mb-0.5">Email general</span>
                info@crisalis.com.ar
              </li>
              <li>
                <span className="block text-gray-500 text-xs mb-0.5">Dirección</span>
                General Paz 1087, Cipolletti, Río Negro
              </li>
            </ul>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2023 CRISALIS. Todos los derechos reservados. Desarrollo Sostenible.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span className="text-xs text-gray-500">Patagonia, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
