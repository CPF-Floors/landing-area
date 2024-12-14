import './App.css'
import Footer from './components/Footer'
import FormBanner from './components/FormBanner'
import LastBanner from './components/LastBanner'
import MainBanner from './components/MainBanner'
import Memberships from './components/Memberships'
import SecondBanner from './components/SecondBanner'

function App() {
  
  return (
    <>
        <MainBanner />
        <SecondBanner />
        <Memberships />
        <FormBanner />
        <LastBanner />
        <Footer />
    </>
  )
}

export default App
