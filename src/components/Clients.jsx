import { motion } from 'framer-motion'

const clients = [
  { id: 1, name: 'Tenaris',              logo: '/clientes/tenaris.png' },
  { id: 2, name: 'Oldelval',             logo: '/clientes/oldelval.png' },
  { id: 3, name: 'La Anónima',           logo: '/clientes/laanonima.png' },
  { id: 4, name: 'Chacra Fernández Oro', logo: '/clientes/chacragfo.png' },
  { id: 5, name: 'Mecánica 14',          logo: '/clientes/mecanica14.png' },
  { id: 6, name: 'Indarsa',              logo: '/clientes/indarsa.png' },
  { id: 7, name: 'RatePlast',            logo: '/clientes/rateplast.png' },
  { id: 8, name: 'Texproil',             logo: '/clientes/texproil.png' },
]

function ClientLogo({ name, logo }) {
  return (
    <div className="shrink-0 w-64 h-32 mx-6 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md hover:border-brand-200 transition-all px-6">
      <img
        src={logo}
        alt={name}
        className="max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  )
}

export default function Clients() {
  const doubled = [...clients, ...clients]

  return (
    <section id="clients" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-600 font-semibold text-sm tracking-widest uppercase">Confianza comprobada</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Clientes que confían en nosotros
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-600 mx-auto rounded-full" />
        </motion.div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee py-4">
            {doubled.map((client, i) => (
              <ClientLogo key={`${client.id}-${i}`} name={client.name} logo={client.logo} />
            ))}
          </div>
        </motion.div>

        {/* Texto de confianza */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Más de 15 años trabajando con líderes de la industria energética y gubernamental en la Patagonia.
        </motion.p>
      </div>
    </section>
  )
}
