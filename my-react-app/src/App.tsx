import { Card } from "./components/card"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

function App() {
  return (
    <div>
      <Header />

      <div className="card-holder">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  )
}

export default App
