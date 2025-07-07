
// Student prop types
type StudentProps = {
    name?: string;
    age: number;
    isStudent: boolean;
    course?: string;
}

export function Student({name="Convidado", age, isStudent, course}: StudentProps) {

    const style = {
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px"
    }

    const textStyle = {
        margin: "0px"
    }

    return (
        <div style={style}>
            <h3>Nome: {name}</h3>
            <p style={textStyle}>Idade: {age}</p>
            <p style={textStyle}>É estudante: {isStudent ? 'Sim' : 'Nao'}</p>
            {isStudent && course ? (<p style={textStyle}>Curso: {course}</p>) : null}
        </div>
    );
}