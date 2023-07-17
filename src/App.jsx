import './styles/App.css'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Auction from './components/auction/Auction'
// import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <Intro />
      <Auction />
    </div>
  )
}

export default App
