import profile_picture from '../../assets/profile_picture.png'
import '../../Card.css'

export function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profile_picture} alt="Imagem de perfil" />
            <h2>João Victor Calvet</h2>
            <p>Desenvolvedor Full Stack<br />Jogador de video game nas horas livres</p>
        </div>
    );
}