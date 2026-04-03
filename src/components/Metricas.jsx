export default function Metricas() {
  const stats = [
    { valor: "+200", label: "autónomos y PYMEs", desc: "ya gestionan sus clientes con CRMPro" },
    { valor: "8h", label: "ahorradas por semana", desc: "de media por cada usuario activo" },
    { valor: "98%", label: "de satisfacción", desc: "en valoraciones de clientes actuales" },
    { valor: "< 1 día", label: "de configuración", desc: "sin necesidad de formación técnica" },
  ]
  return (
    <section className="py-24 px-6 border-y border-white/5" style={{background: '#0d0d0d'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">{s.valor}</p>
            <p className="text-indigo-400 text-sm font-medium mb-1">{s.label}</p>
            <p className="text-gray-600 text-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
