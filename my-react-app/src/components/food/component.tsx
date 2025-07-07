export function Food() {
    const food1 = "banana";
    const food2 = "macarrão";

    return (
        <ul>
            <li>Maça</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}