/*
React hook = Função especial que permite um componente funcional usar funcionalidades do React.
Hooks apenas em nivel superior. Nada de laços, condicionais ou funções aninhadas.
Chamar hooks apenas em funções React.

useState = Gerenciador de memória do componente
Sem ele, toda variavél declarada dentro do componente é perdida quando o componente é renderizado novamente.
Passar uma função para o useState para que ela seja executada apenas quando o componente for renderizado.
*/

import { useState } from "react";

export function HookUseEffect() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você me clicou {count} vezes!</p>
            <div>
                <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrementar</button>
                <button onClick={() => setCount(0)}>Resetar</button>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>Aumentar</button>
            </div>
        </div>
    );
}