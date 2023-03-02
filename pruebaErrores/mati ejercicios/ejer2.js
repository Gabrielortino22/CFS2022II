import { useState } from `react`;
import { Galeria } from `./data.js`;
export default function form() {
    const [ firstName, setFirstName ] = useState =(``);
    const [ lastName, setLastName ] = useState =(``);
    

    function handleFirstNameChange(e) {
        setFirstName = (e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName =( e.target.value);
    }

    function handleReset() {
        setFirstName = (``);
        setLastName = (``);
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <imput 
            placeholder="Nombre"
            value={firstName}
            onChange={handleFirstNameChange}
            />
            <imput 
            placeholder="Apellido"
            value={lastName}
            onChange={handleLastNameChange}
            />

            <h1>hola, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reiniciar</button>

        </form>
    )
}