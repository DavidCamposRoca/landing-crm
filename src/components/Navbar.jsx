export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200" style={{background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(12px)'}}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">C</div>
          <span className="text-gray-900 font-semibold text-lg tracking-tight">CRMPro</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition">Características</a>
          <a href="#testimonios" className="hover:text-gray-900 transition">Clientes</a>
          <a href="#demo" className="hover:text-gray-900 transition">Precios</a>
        </div>
        <a href="#demo" className="text-sm text-white px-4 py-2 rounded-lg font-medium transition hover:opacity-90" style={{background:'#FF6B35'}}>Solicitar demo →</a>
      </div>
    </nav>
  )
}
