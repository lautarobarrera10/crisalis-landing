import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function CircularEconomySVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto" aria-label="Ciclo de economía circular">
      {/* Fondo circular sutil */}
      <circle cx="150" cy="150" r="140" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="1" />

      {/* Anillo exterior giratorio */}
      <g className="animate-spin-slow" style={{ transformOrigin: '150px 150px' }}>
        <circle cx="150" cy="150" r="120" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="12 8" />

        {/* Flechas del ciclo */}
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 150 + 120 * Math.cos(rad)
          const y = 150 + 120 * Math.sin(rad)
          const colors = ['#059669', '#10b981', '#34d399', '#6ee7b7']
          return (
            <circle key={i} cx={x} cy={y} r="8" fill={colors[i]} opacity="0.9" />
          )
        })}
      </g>

      {/* Anillo interior fijo */}
      <circle cx="150" cy="150" r="85" fill="none" stroke="#d1fae5" strokeWidth="16" />

      {/* Iconos / etiquetas en los 4 cuadrantes */}
      {[
        { x: 150, y: 55, icon: '♻', label: 'Reciclar' },
        { x: 245, y: 150, icon: '🔄', label: 'Reutilizar' },
        { x: 150, y: 245, icon: '🌱', label: 'Renovar' },
        { x: 55, y: 150, icon: '⚙', label: 'Reparar' },
      ].map(({ x, y, icon, label }) => (
        <g key={label}>
          <text x={x} y={y - 6} textAnchor="middle" fontSize="20" dominantBaseline="middle">
            {icon}
          </text>
          <text x={x} y={y + 14} textAnchor="middle" fontSize="10" fill="#059669" fontWeight="600">
            {label}
          </text>
        </g>
      ))}

      {/* Centro */}
      <circle cx="150" cy="150" r="48" fill="#059669" />
      <text x="150" y="145" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" dominantBaseline="middle">
        ECONOMÍA
      </text>
      <text x="150" y="160" textAnchor="middle" fontSize="11" fill="#d1fae5" fontWeight="600" dominantBaseline="middle">
        CIRCULAR
      </text>
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Quiénes Somos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Sobre Nosotros</h2>
          <div className="mt-4 w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna texto */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Bloque 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Nuestra Empresa
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed pl-8">
                <p>
                  Somos una empresa tratadora de residuos, que ofrece un servicio innovador orientado al
                  recupero y reciclado, asesorando a nuestros clientes para aplicar, en conjunto, el concepto
                  de economía circular.
                </p>
                <p>
                  Con nuestras tecnologías, en permanente innovación, proponemos transformar los residuos en
                  recursos para otros procesos, reinsertándolos así en el mercado de la producción y el consumo.
                </p>
                <p>
                  Creemos firmemente que cada pequeño aporte cuenta para la preservación del ambiente. Este es
                  nuestro aporte para el desarrollo sostenible.{' '}
                  <span className="text-emerald-700 font-medium">Es nuestra visión.</span>
                </p>
              </div>
            </div>

            {/* Separador */}
            <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50 py-4 pr-4 rounded-r-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Economía Circular</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  La economía circular es un modelo de producción y consumo que implica reutilizar, reparar,
                  renovar y reciclar materiales y productos existentes, todas las veces que sea posible para
                  crear un valor añadido.
                </p>
                <p>
                  De esta forma, el ciclo de vida de los productos se extiende, ya que cuando un producto llega
                  al final de su vida, sus materiales se mantienen dentro de la economía siempre que sea posible.
                </p>
                <p>
                  En la práctica, implica reducir los residuos al mínimo.{' '}
                  <span className="text-emerald-700 font-medium">Es nuestra misión.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CircularEconomySVG />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
