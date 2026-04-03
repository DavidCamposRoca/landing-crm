import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Galeria from './components/Galeria'
import Testimonios from './components/Testimonios'
import Formulario from './components/Formulario'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{fontFamily: 'system-ui, sans-serif'}}>
      <Navbar />
      <Hero />
      <Features />
      <Galeria />
      <Testimonios />
      <Formulario />
      <Footer />
    </div>
  )
}
export default App
