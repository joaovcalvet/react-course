import { useState } from "react";

import style from "./colorPicker.module.css";

export function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    }

    return (
        <div className={style.container}>
            <h1>Color Picker</h1>
            <div className={style.display} style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>

            <div className={style.colorPicker}>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    );
}