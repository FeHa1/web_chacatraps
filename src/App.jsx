import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import FormatoEnVivo from './pages/FormatoEnVivo.jsx'
import Acusticos from './pages/Acusticos.jsx'
import Discografia from './pages/Discografia.jsx'
import Videoclips from './pages/Videoclips.jsx'
import NotFound from './pages/NotFound.jsx'
import ScanlinesOverlay from './components/ScanlinesOverlay.jsx'
import MonitorBanner from './components/MonitorBanner.jsx'
import BootOverlay from './components/BootOverlay.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <MonitorBanner />
      <ScanlinesOverlay />
      <BootOverlay />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/formato_en_vivo" element={<FormatoEnVivo />} />
          <Route path="/acusticos" element={<Acusticos />} />
          <Route path="/discografia" element={<Discografia />} />
          <Route path="/videoclips" element={<Videoclips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
