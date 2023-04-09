import Navbar from './components/sections/Navbar'
import LogoSection from './components/sections/LogoSection'
import UploadSection from './components/sections/UploadSection'
import FooterSection from './components/sections/FooterSection'
import './App.css'

function App() {
  return (
    <div id='app'>
      <div id='head'>
        <Navbar />
      </div>
      <div id='body'>
        <LogoSection />
        <UploadSection />
        <FooterSection />
      </div>
    </div>
  )
}

export default App
