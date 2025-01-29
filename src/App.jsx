import Hero from "./components/Hero"
import Highligths from "./components/Highlights"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highligths />
    </main>

  )
}

export default App
