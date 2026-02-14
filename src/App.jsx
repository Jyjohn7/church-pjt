import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Worship from './components/Worship'
import Sermons from './components/Sermons'
import Events from './components/Events'
import Gallery from './components/Gallery'
import NewFamily from './components/NewFamily'
import Organization from './components/Organization'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Worship />
            <Sermons />
            <Events />
            <Gallery />
            <NewFamily />
            <Organization />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
