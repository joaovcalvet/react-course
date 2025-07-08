type ListProps = {
    category: string;
    items?: {
        name: string;
        calories: number;
    }[];
};

export function List({ category, items }: ListProps) {

    // const fruits = fruitList.map((fruit) => <li>{fruit}</li>);

    // fruitList.sort((a, b) => a.name.localeCompare(b.name));
    // fruitList.sort((a, b) => b.localeCompare(a));
    // fruitList.sort((a, b) => a.calories - b.calories);

    // const highCalFruits = fruitList.filter(fruit => fruit.calories >= 100);
    // const lowCallFruits = fruitList.filter(fruit => fruit.calories < 100);

    return (
        <div>
            <h2>{category}</h2>
            <ul>
                {items 
                    ? items.map(item => <li>{item.name}: <b>{item.calories}</b></li>) 
                    : "Nenhum item encontrado"
                }
            </ul>
        </div>
    );
}