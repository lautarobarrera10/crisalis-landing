import { motion } from 'framer-motion'

const clients = [
  { id: 1, name: 'YPF S.A.' },
  { id: 2, name: 'Repsol' },
  { id: 3, name: 'Tecpetrol' },
  { id: 4, name: 'Capsa' },
  { id: 5, name: 'Shell Argentina' },
  { id: 6, name: 'Pan American Energy' },
  { id: 7, name: 'Pluspetrol' },
  { id: 8, name: 'Municipalidad de Cipolletti' },
]

function LogoPlaceholder({ name }) {
  // Genera 2 letras representativas
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="shrink-0 w-40 h-20 mx-4 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center gap-1 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
      <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-brand-50 flex items-center justify-center text-gray-500 group-hover:text-brand-600 font-bold text-sm transition-all">
        {initials}
      </div>
      <p className="text-xs text-gray-400 font-medium text-center px-2 leading-tight">{name}</p>
    </div>
  )
}

export default function Clients() {
  // Duplicamos la lista para el carrusel infinito
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
              <LogoPlaceholder key={`${client.id}-${i}`} name={client.name} />
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
