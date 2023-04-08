import Navbar from './Navbar'
import LogoSection from './LogoSection'
import UploadSection from './UploadSection'
import FooterSection from './FooterSection'
import '../styles/App.css'

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
