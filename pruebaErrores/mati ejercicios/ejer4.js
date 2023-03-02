import { useState } from `react`;

export default function FeadbackForm() {
    const [name, setName] =useState(``);

    function handleClick() {
    setName(prompt(`¿cual es tu nombre?`));
    alert(`hola,${name}!`);
    }

    return (
        <button onClick={hanleClick}>
            Saludar
        </button>
    );
}