import { Card } from "./components/card"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { ExternalButtonStyle, InlineButtonStyle, ModuleButtonStyle } from "./components/style-component";

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

        <InlineButtonStyle />
        <ModuleButtonStyle />
        <ExternalButtonStyle />
        <Footer />
    </div>
    );
}

export default App
