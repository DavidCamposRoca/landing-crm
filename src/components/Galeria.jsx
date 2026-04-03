export default function Galeria() {
  const pasos = [
    {
      numero: "01",
      titulo: "Importa tus contactos",
      desc: "Sube tu Excel o añade clientes manualmente en segundos. Sin configuraciones complicadas.",
      icono: "→"
    },
    {
      numero: "02",
      titulo: "Organiza tu pipeline",
      desc: "Mueve clientes entre fases con un clic. Ve en qué punto está cada oportunidad de venta.",
      icono: "◎"
    },
    {
      numero: "03",
      titulo: "Cierra más y olvida menos",
      desc: "Recibe recordatorios automáticos. Nunca más pierdas un seguimiento por despiste.",
      icono: "✓"
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-600 text-sm font-medium uppercase tracking-widest mb-3">Cómo funciona</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">En 3 pasos tienes el control</h2>
          <p className="text-gray-500 mt-3 text-lg">Sin formación. Sin IT. Solo tú y tus clientes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((p, i) => (
            <div key={i} className="relative p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all group">
              <div className="text-5xl font-black text-indigo-50 group-hover:text-indigo-100 transition mb-4 select-none">{p.numero}</div>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold mb-4">{p.icono}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{p.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-200 text-2xl z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
