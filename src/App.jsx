import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metricas from './components/Metricas'
import Features from './components/Features'
import Perfiles from './components/Perfiles'
import Galeria from './components/Galeria'
import Testimonios from './components/Testimonios'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import CTAFlotante from './components/CTAFlotante'
import ConsentBanner from './components/ConsentBanner'

function App() {
  return (
    <div style={{fontFamily: 'system-ui, sans-serif'}}>
      <Navbar />
      <Hero />
      <Metricas />
      <Features />
      <Perfiles />
      <Galeria />
      <Testimonios />
      <Formulario />
      <Footer />
      <CTAFlotante />
      <ConsentBanner />
    </div>
  )
}
export default App
