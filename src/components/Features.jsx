const features = [
  { icon: "◈", title: "Gestión de contactos", desc: "Todos tus clientes y leads organizados. Búsqueda instantánea, etiquetas y notas." },
  { icon: "◎", title: "Pipeline de ventas", desc: "Visualiza cada oportunidad. Arrastra y suelta entre fases. Sin Excel." },
  { icon: "◷", title: "Recordatorios automáticos", desc: "Alertas para cada seguimiento. Nunca dejes escapar una oportunidad por olvido." },
  { icon: "◫", title: "Historial completo", desc: "Emails, llamadas y reuniones vinculados a cada contacto. Todo en contexto." },
  { icon: "◻", title: "Documentos integrados", desc: "Presupuestos, contratos y facturas adjuntos al cliente. Sin buscar en carpetas." },
  { icon: "◉", title: "Acceso desde cualquier lugar", desc: "Móvil, tablet u ordenador. Sin instalar nada. Siempre actualizado." },
]
export default function Features() {
  return (
    <section id="features" className="py-32 px-6" style={{background: '#f9fafb'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-indigo-500 text-sm font-medium uppercase tracking-widest mb-4">Características</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Todo lo que necesitas.<br/>Nada que no uses.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {features.map((f,i) => (
            <div key={i} className="p-8 hover:bg-gray-50 transition-all bg-white">
              <div className="text-indigo-500 text-4xl mb-5">{f.icon}</div>
              <h3 className="text-gray-900 font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
