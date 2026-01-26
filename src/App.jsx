import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { IFS } from './pages/IFS'
import { EMDR } from './pages/EMDR'
import { Investment } from './pages/Investment'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/ifs" element={<IFS />} />
      <Route path="/emdr" element={<EMDR />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
