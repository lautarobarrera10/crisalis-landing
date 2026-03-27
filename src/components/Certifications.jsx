import { motion } from 'framer-motion'
import { DocumentArrowDownIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const certs = [
  { name: 'Operador Nación', desc: 'Habilitación nacional de operación' },
  { name: 'Operador Río Negro', desc: 'Habilitación provincial — Río Negro' },
  { name: 'Transporte Nación', desc: 'Habilitación nacional de transporte' },
  { name: 'Transporte Neuquén', desc: 'C.A.E. N° 510/22 — Neuquén' },
  { name: 'Transporte Río Negro', desc: 'Habilitación provincial — Río Negro' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-600 font-semibold text-sm tracking-widest uppercase">Documentación oficial</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Certificaciones</h2>
          <div className="mt-4 w-16 h-1 bg-brand-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Contamos con todas las habilitaciones nacionales y provinciales vigentes para operar con total
            garantía legal y ambiental.
          </p>
        </motion.div>

        {/* Badge de verificado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium">
            <ShieldCheckIcon className="w-5 h-5" />
            Empresa habilitada y auditada por organismos nacionales y provinciales
          </div>
        </motion.div>

        {/* Grid de certificados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.name}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-400 hover:bg-brand-50 hover:shadow-md transition-all"
            >
              {/* Icono PDF */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 group-hover:border-brand-300 flex flex-col items-center justify-center shadow-sm transition-all">
                <DocumentArrowDownIcon className="w-7 h-7 text-brand-600" />
                <span className="text-[9px] font-bold text-red-500 tracking-wider mt-0.5">PDF</span>
              </div>

              <div className="text-center">
                <p className="text-sm font-bold text-gray-800 group-hover:text-brand-700 transition-colors">
                  {cert.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{cert.desc}</p>
              </div>

              <span className="text-xs text-brand-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Descargar documento →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
