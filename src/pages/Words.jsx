import React, { useState } from 'react';

function Words() {
    const [text, setText] = useState('');

    const removeVowels = (str) => {
        return str.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
    };

    return (
        <div className="remove-vowels">
        <h2 className="remove-vowels__title">El removedor de vocales 3000 </h2>

        <label htmlFor="remove-vowels-input" className="remove-vowels__label">
            Ingresa un texto
        </label>
        <input
            id="remove-vowels-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Aquí va tu texto..."
            className="remove-vowels__input"
            aria-describedby="output"
        />

        <p id="output" className="remove-vowels__result">
            <strong>Después de la magia tu texto se ve así:</strong> {removeVowels(text)}
        </p>
        </div>
    );
}

export default Words;