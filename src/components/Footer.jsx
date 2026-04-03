export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{background: '#0f0f1a', borderTop: '1px solid #6366f1'}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span style={{fontSize:'16px', fontWeight:'800', letterSpacing:'-0.5px', color:'white', fontFamily:'system-ui'}}>MKTWEB</span>
            <span style={{background:'#6366f1', color:'white', fontSize:'9px', fontWeight:'700', letterSpacing:'1.5px', padding:'2px 7px', borderRadius:'4px'}}>CRM</span>
            <span style={{color:'#6366f1', fontSize:'9px', fontWeight:'400'}}>Solutions</span>
          </div>
          <p className="text-gray-400 text-xs">by Marketing Web Madrid</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="https://marketingwebmadrid.es" className="hover:text-gray-900 transition">marketingwebmadrid.es</a>
          <a href="mailto:info@marketingwebmadrid.es" className="hover:text-gray-900 transition">Contacto</a>
          <a href="#" className="hover:text-gray-900 transition">Privacidad</a>
        </div>
        <p className="text-gray-400 text-xs">© 2026 Marketing Web Madrid</p>
      </div>
    </footer>
  )
}
