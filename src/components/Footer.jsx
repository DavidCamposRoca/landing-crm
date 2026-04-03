export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6" style={{background: '#f9fafb'}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">C</div>
            <span className="text-gray-900 font-semibold">CRMPro</span>
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
