export function Click() {
    
    const handleClick = () => console.log("DALE!")
    const handleClick2 = (name: string) => console.log(name)

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2("dale")}>Click me 2</button>
        </>
    );
}