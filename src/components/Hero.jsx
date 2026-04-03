export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" style={{background: '#ffffff', paddingBottom: '80px'}}>
      <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)'}} />
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-500 mb-8 bg-gray-50">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Diseñado para autónomos y PYMEs españolas
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Tu CRM.<br />
          <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #6366f1, #a855f7)'}}>Sin complicaciones.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">Gestiona clientes, seguimientos y ventas en un solo lugar. Adaptado a cómo trabajas tú, no al revés.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold transition">Pedir demo gratuita →</a>
          <a href="#features" className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-8 py-3.5 rounded-xl font-semibold transition">Ver cómo funciona</a>
        </div>

      </div>
    </section>
  )
}
