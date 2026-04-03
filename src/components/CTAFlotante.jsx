import { useState } from 'react'

export default function CTAFlotante() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center px-4 pb-4">
      <div className="flex items-center gap-4 rounded-2xl px-6 py-4 shadow-2xl max-w-xl w-full" style={{background: '#111111', border: '2px solid #f97316'}}>
        <div className="flex -space-x-2 flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80" className="w-9 h-9 rounded-full object-cover border-2 border-gray-800" alt="" />
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80" className="w-9 h-9 rounded-full object-cover border-2 border-gray-800" alt="" />
        </div>
        <p className="text-gray-300 text-sm flex-1">Más de <span className="text-white font-semibold">200 autónomos</span> ya gestionan mejor sus clientes</p>
        <a href="#demo" className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-4 py-2 rounded-xl transition flex-shrink-0">
          Pedir demo →
        </a>
        <button onClick={() => setVisible(false)} className="text-gray-600 hover:text-gray-400 transition flex-shrink-0 text-lg leading-none">✕</button>
      </div>
    </div>
  )
}
