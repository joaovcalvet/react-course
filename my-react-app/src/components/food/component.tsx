export function Food() {

    const food1 = "macarrão";
    const food2 = "Feijão";

    return (
        <ul>
            <li>Queijo</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}