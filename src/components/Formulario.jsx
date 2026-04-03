import { useState } from 'react'
import { supabase } from '../supabase'

export default function Formulario() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '', privacidad: false })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    const { data, error } = await supabase.from('contacts').insert([{
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      empresa: form.empresa,
      notas: form.mensaje,
      fuente: 'Landing CRM',
      estado_funnel: 'Nuevo lead',
      fecha_entrada: new Date().toISOString().split('T')[0]
    }])
    console.log('Supabase response:', data, error)
    if (!error) setEnviado(true)
  }
  const inputClass = "w-full rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:border-indigo-400 transition bg-white"
  return (
    <section id="demo" className="py-32 px-6" style={{background: '#f9fafb'}}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-500 text-sm font-medium uppercase tracking-widest mb-4">Demo gratuita</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Empieza hoy</h2>
          <p className="text-gray-400">Sin compromiso. Te contactamos en menos de 24h.</p>
        </div>
        {enviado ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-emerald-600 font-semibold text-lg">¡Solicitud recibida!</p>
            <p className="text-gray-500 text-sm mt-2">Te contactaremos antes de 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-8 flex flex-col gap-4 bg-white shadow-sm">
            <input name="nombre" onChange={handleChange} required placeholder="Tu nombre" className={inputClass} />
            <input name="email" type="email" onChange={handleChange} required placeholder="Email de trabajo" className={inputClass} />
            <input name="telefono" type="tel" onChange={handleChange} placeholder="Teléfono (opcional)" className={inputClass} />
            <input name="empresa" onChange={handleChange} placeholder="Empresa o sector (opcional)" className={inputClass} />
            <textarea name="mensaje" onChange={handleChange} placeholder="¿Qué necesitas gestionar?" rows={3} className={inputClass} />
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="privacidad"
                id="privacidad"
                required
                onChange={e => setForm({ ...form, privacidad: e.target.checked })}
                className="mt-1 accent-indigo-500"
              />
              <label htmlFor="privacidad" className="text-xs text-gray-500 leading-relaxed">
                He leído y acepto la{' '}
                <a href="/politica-de-privacidad" target="_blank" className="text-indigo-400 hover:underline">
                  política de privacidad
                </a>
                . Marketing Web Madrid tratará tus datos para gestionar tu solicitud de demo. No se cederán a terceros salvo obligación legal.
              </label>
            </div>
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3.5 rounded-xl font-semibold transition mt-2">Quiero mi demo gratuita →</button>
            <p className="text-center text-xs text-gray-400">Sin spam. Sin tarjeta de crédito.</p>
          </form>
        )}
      </div>
    </section>
  )
}
