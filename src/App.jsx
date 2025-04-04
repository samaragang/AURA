import './styles/App.css'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Auction from './components/auction/Auction'
import NewStickers from './components/new-stickers/NewStickers'
import AuthorApplication from './components/author-application/AuthorApplication'
import TopSales from './components/top-sales/TopSales'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <Intro />
      <Auction />
      <NewStickers />
      <AuthorApplication />
      <TopSales />
      <Footer />
    </div>
  )
}

export default App
