import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
  { label: 'Sobre Nosotros', href: '#about', num: '01' },
  { label: 'Servicios', href: '#services', num: '02' },
  { label: 'Certificaciones', href: '#certifications', num: '03' },
  { label: 'Clientes', href: '#clients', num: '04' },
  { label: 'Contacto', href: '#contact', num: '05' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Bloquea scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLink(e, '#home')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path
                    d="M12 2C8 2 4.5 5 4.5 9c0 2.5 1.2 4.7 3 6.1V17h9v-1.9c1.8-1.4 3-3.6 3-6.1C19.5 5 16 2 12 2z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <path d="M9 17v2a3 3 0 0 0 6 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className={`text-xl font-bold tracking-widest transition-colors ${
                scrolled || open ? 'text-emerald-700' : 'text-white'
              }`}>
                CRISALIS
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLink(e, '#contact')}
                className="ml-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
              >
                Contactar
              </a>
            </nav>

            {/* Hamburger */}
            <button
              className={`md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                open ? 'text-gray-800 bg-gray-100' : scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — overlay pantalla completa */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 md:hidden flex flex-col bg-white"
          >
            {/* Espacio para el header */}
            <div className="h-16" />

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.25, ease: 'easeOut' }}
                  className="group flex items-center gap-3 py-3.5 border-b border-gray-100 last:border-0"
                >
                  <span className="text-[10px] font-mono text-emerald-500 w-5 shrink-0">{link.num}</span>
                  <span className="text-base font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {link.label}
                  </span>
                  <span className="ml-auto text-gray-300 group-hover:text-emerald-400 transition-colors text-sm">→</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer del menú */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10"
            >
              <a
                href="#contact"
                onClick={(e) => handleLink(e, '#contact')}
                className="block w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl text-center transition-colors text-base"
              >
                Contactar ahora
              </a>
              <p className="mt-4 text-xs text-gray-400 text-center">
                General Paz 1087 · Cipolletti · Río Negro
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
