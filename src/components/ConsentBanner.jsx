import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const pref = localStorage.getItem('cookie_pref')
    if (!pref) setTimeout(() => setVisible(true), 500)
  }, [])

  const handleConsent = (an, mk) => {
    localStorage.setItem('cookie_pref', JSON.stringify({ analytics: an, marketing: mk }))
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': an ? 'granted' : 'denied',
        'ad_storage': mk ? 'granted' : 'denied',
        'ad_user_data': mk ? 'granted' : 'denied',
        'ad_personalization': mk ? 'granted' : 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
      })
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: '#1a1a1a', color: '#fff', padding: '24px 30px',
      zIndex: 9999, maxWidth: '700px', margin: '0 auto',
      borderRadius: '12px 12px 0 0', border: '1px solid #333',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
    }}>
      <h3 style={{margin: '0 0 10px', fontSize: '1.1em'}}>Preferencias de Cookies</h3>
      <p style={{fontSize: '0.85em', color: '#ccc', marginBottom: '16px'}}>
        Usamos cookies para mejorar tu experiencia.{' '}
        <a href="https://marketingwebmadrid.es/politica-de-cookies/" target="_blank" style={{color: '#6366f1'}}>Política de Cookies</a>
      </p>
      <label style={{display:'block', marginBottom:'8px', fontSize:'0.85em'}}>
        <input type="checkbox" disabled checked readOnly style={{marginRight:'8px'}} />
        Necesarias (siempre activas)
      </label>
      <label style={{display:'block', marginBottom:'8px', fontSize:'0.85em'}}>
        <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} style={{marginRight:'8px', accentColor:'#6366f1'}} />
        Estadísticas (Google Analytics)
      </label>
      <label style={{display:'block', marginBottom:'16px', fontSize:'0.85em'}}>
        <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} style={{marginRight:'8px', accentColor:'#6366f1'}} />
        Marketing (Google Ads)
      </label>
      <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
        <button onClick={() => handleConsent(true, true)} style={{background:'#6366f1', color:'#fff', border:'none', padding:'10px 18px', borderRadius:'6px', fontWeight:'600', cursor:'pointer'}}>Aceptar todo</button>
        <button onClick={() => handleConsent(analytics, marketing)} style={{background:'#fff', color:'#000', border:'none', padding:'10px 18px', borderRadius:'6px', fontWeight:'600', cursor:'pointer'}}>Aceptar selección</button>
        <button onClick={() => handleConsent(false, false)} style={{background:'#6c757d', color:'#fff', border:'none', padding:'10px 18px', borderRadius:'6px', fontWeight:'600', cursor:'pointer'}}>Rechazar todo</button>
      </div>
    </div>
  )
}
