import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { List } from "./components/list";

function App() {
    const fruitList = [
        {name: "Banana", calories: 89},
        {name: "Maça", calories: 98}, 
        {name: "Laranja", calories: 74}, 
        {name: "Abacaxi", calories: 124}
    ];

    return (
    <div>
        <Header />

        <div className="card-holder">
            <List category="Fruits" items={fruitList} />
        </div>

        <Footer />
    </div>
    );
}

export default App;
