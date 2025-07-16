import { useState } from "react";

export function ToDo() {

    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    }

    const addItem = () => {
        if (newItem.trim() === "")
            return;

        setItems(prevItems => [...prevItems, newItem]);
    }

    const removeItem = (index: number) => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    }

    const handleUpItem = (index: number) => {
        if (index <= 0)
            return;
        
        const updatedItens = [...items];

        [updatedItens[index], updatedItens[index - 1]] = [updatedItens[index - 1], updatedItens[index]];
        setItems(updatedItens);
    }

    const handleDownItem = (index: number) => {
        if (index >= items.length - 1)
            return;
        
        const updatedItens = [...items];

        [updatedItens[index], updatedItens[index + 1]] = [updatedItens[index + 1], updatedItens[index]];
        setItems(updatedItens);
    }

    return (
        <div>
            <h1>To Do List</h1>

            <div>
                <input type="text" placeholder="Adicionar item" value={newItem} onChange={handleInputChange} />
                <button onClick={addItem}>Adicionar</button>
            </div>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeItem(index)}>Remover</button>
                        <button onClick={() => handleUpItem(index)}>Subir</button>
                        <button onClick={() => handleDownItem(index)}>Descer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}