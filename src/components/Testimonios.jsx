const testimonios = [
  { nombre: "Laura G.", rol: "Consultora independiente", letra: "L", estrellas: 5, texto: "Antes usaba Excel y perdía horas. Ahora en 5 minutos sé exactamente qué cliente necesita atención." },
  { nombre: "Carlos R.", rol: "Agencia de diseño · 4 personas", letra: "C", estrellas: 5, texto: "Lo mejor es que no tuve que aprender nada raro. Desde el primer día lo usé sin ayuda." },
  { nombre: "Ana T.", rol: "Asesora fiscal autónoma", letra: "A", estrellas: 5, texto: "Gestiono mis clientes, recordatorios y documentos desde el móvil. Ha sido un cambio total." },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-32 px-6" style={{background: '#0a0a0a'}}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Testimonios</p>
          <h2 className="text-4xl font-bold text-white">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/8 flex flex-col gap-4" style={{background: '#111111'}}>
              <div className="flex gap-1">
                {[...Array(t.estrellas)].map((_, j) => (
                  <span key={j} style={{color: '#f59e0b', fontSize: '14px'}}>★</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">"{t.texto}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 text-sm font-semibold">{t.letra}</div>
                <div>
                  <p className="text-white text-sm font-medium">{t.nombre}</p>
                  <p className="text-gray-600 text-xs">{t.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
