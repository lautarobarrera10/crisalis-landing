import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function InfoBlock({ title, items }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Por favor completá los campos obligatorios.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Hablemos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Contacto</h2>
          <div className="mt-4 w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Columna izquierda — info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <InfoBlock
              title="Planta de Tratamiento"
              items={[
                { icon: MapPinIcon, text: 'General Paz 1087 — Cipolletti — Río Negro — Argentina' },
              ]}
            />
            <div className="border-t border-gray-100 pt-6">
              <InfoBlock
                title="Administración Central"
                items={[
                  { icon: PhoneIcon, text: '+54 299 477 1888' },
                  { icon: ClockIcon, text: 'Lunes a Viernes · 09:00 a 16:00 hs' },
                  { icon: EnvelopeIcon, text: 'info@crisalis.com.ar' },
                ]}
              />
            </div>
            <div className="border-t border-gray-100 pt-6">
              <InfoBlock
                title="Departamento Comercial"
                items={[
                  { icon: PhoneIcon, text: '+54 299 546 2173' },
                  { icon: EnvelopeIcon, text: 'marcelop@crisalis.com.ar' },
                ]}
              />
            </div>
            <div className="border-t border-gray-100 pt-6">
              <InfoBlock
                title="Dirección de Planta"
                items={[
                  { icon: PhoneIcon, text: '+54 299 551 5197' },
                  { icon: EnvelopeIcon, text: 'raulassum@crisalis.com.ar' },
                ]}
              />
            </div>

            {/* Mapa placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 h-44 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPinIcon className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                <p className="text-sm">General Paz 1087, Cipolletti</p>
                <p className="text-xs">Río Negro, Argentina</p>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha — formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircleIcon className="w-16 h-16 text-emerald-500" />
                <h3 className="text-xl font-bold text-gray-900">¡Mensaje enviado!</h3>
                <p className="text-gray-600 max-w-sm">
                  Nos pondremos en contacto contigo a la brevedad. Gracias por confiar en CRISALIS.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', message: '' }) }}
                  className="mt-4 px-6 py-2 rounded-full border border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-5"
              >
                <h3 className="text-lg font-bold text-gray-900">Envíanos un mensaje</h3>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Nombre <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Empresa / Organización
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Mensaje <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.99]"
                >
                  Enviar Mensaje
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Respondemos en menos de 24 horas hábiles.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
