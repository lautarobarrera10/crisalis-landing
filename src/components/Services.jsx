import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TruckIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  CogIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-brand-50 text-gray-800 font-medium text-sm transition-colors"
      >
        {title}
        <ChevronDownIcon
          className={`w-4 h-4 text-brand-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="px-4 py-3 bg-white text-sm text-gray-600">{children}</div>}
    </div>
  )
}

function ServiceCard({ icon: Icon, title, accent, children, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className={`bg-white rounded-2xl p-6 shadow-sm border ${
        accent ? 'border-brand-500 ring-1 ring-brand-500/20' : 'border-gray-100'
      } hover:shadow-md transition-shadow flex flex-col gap-4`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-brand-600" />
        </div>
        <h3 className="text-base font-bold text-gray-900 mt-1.5">{title}</h3>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </motion.div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-block px-2 py-0.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-md border border-brand-100">
      {children}
    </span>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
          <CheckCircleIcon className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-600 font-semibold text-sm tracking-widest uppercase">Lo que hacemos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Nuestros Servicios</h2>
          <div className="mt-4 w-16 h-1 bg-brand-600 mx-auto rounded-full" />
        </motion.div>

        {/* Habilitaciones — banda completa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <DocumentTextIcon className="w-6 h-6 text-brand-600 shrink-0" />
            <h3 className="text-base font-bold text-gray-900">Habilitaciones y Operaciones</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AccordionItem title="Operador Nación — Y48Y8; Y48Y9; Y48Y34; R4; R13; R7">
              <p>Categorías habilitadas para operación a nivel nacional: Y48Y8, Y48Y9, Y48Y34, R4, R13, R7.</p>
            </AccordionItem>
            <AccordionItem title="Operador Río Negro — Y1, Y2, Y3, Y6, Y14, Y44">
              <p>Operador habilitado en la provincia de Río Negro para las categorías: Y1, Y2, Y3, Y6, Y14 e Y44.</p>
            </AccordionItem>
            <AccordionItem title="Transporte Nación — Y2 a Y48">
              <p className="mb-2">
                Y2, Y3, Y4, Y5, Y6, Y8, Y9, Y11, Y12, Y13, Y14, Y16, Y17, Y18 (Residuos resultantes de las
                operaciones de eliminación de desechos industriales contaminados con las categorías habilitadas),
                Y22, Y23, Y27, Y31, Y39, Y40, Y41, Y42 e Y48.
              </p>
            </AccordionItem>
            <AccordionItem title="Transporte Río Negro — Y5 a Y44">
              <p>Y5 Y6 Y8 Y12 Y13 Y15 Y26 Y28 Y30 Y31 Y32 Y33 Y34 Y35 Y38 Y39 Y43 Y44.</p>
            </AccordionItem>
            <AccordionItem title="Transporte Neuquén — C.A.E. N° 510/22">
              <p>Certificado Ambiental Especial (C.A.E.) Nº 510/22 habilitado para el transporte en la provincia del Neuquén.</p>
            </AccordionItem>
          </div>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1 */}
          <ServiceCard icon={ArrowPathIcon} title="Gestión Integral de Residuos" index={0}>
            <BulletList
              items={[
                'Transporte, tratamiento y disposición final de residuos.',
                'Remediaciones in situ de sitios contaminados.',
                'Capacitaciones.',
              ]}
            />
          </ServiceCard>

          {/* 2 */}
          <ServiceCard icon={TruckIcon} title="Transporte de Residuos Peligrosos" index={1}>
            <p className="text-sm text-gray-600">
              Disponemos de vehículos habilitados con características especiales y dimensiones adecuadas para
              espacios reducidos, trabajos en altura y transporte de mercancías y residuos peligrosos.
            </p>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Flota de Camiones</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Tanques con bombas de vacío',
                  'Cisterna',
                  'Bateas',
                  'Semi',
                  'Playo',
                  'Tractor con enganches',
                  'Hidro grúa',
                  'Porta contenedor',
                ].map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 italic">
              Choferes ampliamente capacitados en manipulación de materiales, sustancias y residuos peligrosos.
            </p>
          </ServiceCard>

          {/* 3 */}
          <ServiceCard icon={CogIcon} title="Tratamiento, Recuperado y Reciclado" index={2}>
            <p className="text-sm text-gray-600">
              Nuestras tecnologías permiten la recuperación y reciclado de materiales industriales: ferrosos,
              no ferrosos, plásticos, vidrios, madera, papel, residuos informáticos, baterías, etc.
            </p>
            <p className="text-sm text-gray-600">
              Nuestra experiencia permite adaptarnos al requerimiento del cliente para generar procesos de
              recuperado según sus exigencias, estándares y necesidades, bajo un estricto control de la
              trazabilidad.
            </p>
            <BulletList
              items={[
                'Tratamiento de aceites minerales y su revalorización como insumo para ahorro energético.',
                'Bio-pilas de pequeñas cantidades de tierra con HC, hasta 5 m³, en piletas especialmente diseñadas.',
              ]}
            />
          </ServiceCard>

          {/* 4 */}
          <ServiceCard icon={WrenchScrewdriverIcon} title="Remediaciones In Situ" index={3}>
            <p className="text-sm text-gray-600">
              CRISALIS cuenta con vasta experiencia profesional en remediaciones de sitios contaminados y
              tratamientos in situ.
            </p>
            <p className="text-sm text-gray-600">
              Con recorrida de campo, muestreo y monitoreos, determinamos la presencia de contaminantes, el
              grado y extensión de la contaminación y el medio en que se encuentra.
            </p>
            <p className="text-sm text-gray-600">
              Evaluamos fuentes de contaminación y diseñamos acciones preventivas para evitar la propagación
              y un plan de remediación a medida.
            </p>
          </ServiceCard>

          {/* 5 */}
          <ServiceCard icon={AcademicCapIcon} title="Capacitaciones" index={4}>
            <p className="text-sm text-gray-600">
              Capacitaciones in situ para la reducción de residuos, orientadas al personal de plantas
              industriales y equipos operativos.
            </p>
          </ServiceCard>

          {/* 6 — Acento / destacado */}
          <ServiceCard icon={BuildingOffice2Icon} title="Nuevos Proyectos" accent index={5}>
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
              <p className="text-sm text-brand-800 font-medium leading-relaxed">
                CRISALIS está desarrollando su nueva base en el{' '}
                <strong>Parque Industrial de Cipolletti, Río Negro</strong>. Con instalaciones y tecnologías
                modelo adaptadas a la demanda de los clientes y procesos, contará con:
              </p>
              <BulletList
                items={[
                  'Planta de reciclado',
                  'Lavadero industrial de piletas y equipos especiales',
                  'Tratamiento de líquidos y aceites',
                ]}
              />
            </div>
          </ServiceCard>

          {/* 7 */}
          <ServiceCard icon={CogIcon} title="Ingeniería CRISALIS" index={6}>
            <p className="text-sm text-gray-600">
              Fabricación de tráileres y piezas para la industria petrolera, bajo normas y altos estándares
              de calidad solicitados por el cliente, enfocados en la sustentabilidad y el confort, con
              servicio de mantenimiento e interconeccionado.
            </p>
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}
