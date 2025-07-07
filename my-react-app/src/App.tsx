import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Student } from "./components/student/component";

function App() {
    return (
    <div>
        <Header />

        <div className="card-holder">
            <Student name="João Victor Calvet" age={21} isStudent={true} course="Sistemas de Informação" />
            <Student name="Anderson Ferreira Calvet" age={47} isStudent={false} />
            <Student name="Patricia Affonso" age={44} isStudent={false} />
            <Student age={16} isStudent={true} course="Técnico em Informática" />
        </div>

        <Footer />
    </div>
    );
}

export default App
