export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50" style={{background: '#0a0a0a', borderBottom: '1px solid #6366f1'}}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span style={{fontSize:'22px', fontWeight:'800', letterSpacing:'-0.5px', color:'white', fontFamily:'system-ui', textShadow:'none', WebkitTextStroke:'0px'}}>MKTWEB</span>
            <span style={{background:'#6366f1', color:'white', fontSize:'11px', fontWeight:'700', letterSpacing:'1.5px', padding:'3px 10px', borderRadius:'5px'}}>CRM</span>
            <span style={{color:'#6366f1', fontSize:'11px', fontWeight:'400', letterSpacing:'0.5px'}}>Solutions</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#features" className="hover:text-indigo-300 transition">Características</a>
          <a href="#testimonios" className="hover:text-indigo-300 transition">Clientes</a>
          <a href="#demo" className="hover:text-indigo-300 transition">Precios</a>
        </div>
        <a href="#demo" className="text-sm text-white px-4 py-2 rounded-lg font-medium transition hover:opacity-90" style={{background:'#FF6B35'}}>Solicitar demo →</a>
      </div>
    </nav>
  )
}
