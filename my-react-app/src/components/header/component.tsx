import "./header.module.css"

export function Header() {
    return (
        <header>
            <h1>Meu Site React</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </header>
    )
}