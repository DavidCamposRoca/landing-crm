const perfiles = [
  {
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    nombre: "Laura García",
    rol: "Consultora independiente",
    problema: "Gestionaba 40 clientes en Excel. Perdía seguimientos y oportunidades cada semana.",
    resultado: "Ahora tarda 10 minutos en ver el estado de todos sus clientes.",
    ahorro: "8h / semana"
  },
  {
    foto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    nombre: "Carlos Ruiz",
    rol: "Fisioterapeuta · Clínica propia",
    problema: "Olvidaba llamar a pacientes tras las sesiones. Su agenda era un caos.",
    resultado: "Los recordatorios automáticos le han reducido las cancelaciones un 60%.",
    ahorro: "5h / semana"
  },
  {
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    nombre: "Miguel Torres",
    rol: "Agencia de diseño · 4 personas",
    problema: "Su equipo no sabía en qué estado estaba cada presupuesto enviado.",
    resultado: "Ahora todo el equipo ve el pipeline en tiempo real desde el móvil.",
    ahorro: "12h / semana"
  },
  {
    foto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    nombre: "Ana Martínez",
    rol: "Asesora fiscal autónoma",
    problema: "Cada campaña de renta era un estrés. No tenía control de qué clientes estaban pendientes.",
    resultado: "Con el CRM sabe exactamente qué cliente necesita atención cada día.",
    ahorro: "6h / semana"
  },
]

export default function Perfiles() {
  return (
    <section className="py-32 px-6" style={{background: '#080808'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Para personas como tú</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ellos ya dejaron el Excel</h2>
          <p className="text-gray-500 text-lg">Autónomos y pequeños equipos que recuperaron el control de su negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {perfiles.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/8 overflow-hidden flex flex-col md:flex-row" style={{background: '#111111'}}>
              <div className="w-full md:w-40 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img src={p.foto} alt={p.nombre} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <p className="text-white font-semibold text-sm">{p.nombre}</p>
                      <p className="text-indigo-400 text-xs">{p.rol}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm italic mb-3">"{p.problema}"</p>
                  <p className="text-gray-300 text-sm">{p.resultado}</p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 w-fit">
                  <span className="text-indigo-400 text-xs font-semibold">⏱ Ahorra {p.ahorro}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
