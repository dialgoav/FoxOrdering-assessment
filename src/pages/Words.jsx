import React, { useState } from 'react';

function Words() {
    const [text, setText] = useState('');

    const removeVowels = (str) => {
        return str.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
    };

    return (
        <div className="remove-vowels">
            <h1 className="remove-vowels__title">El removedor de vocales 3000 </h1>

            <label className="remove-vowels__label">
                Ingresa un texto
            </label>
            
            <textarea
                id="remove-vowels-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Aquí va tu texto..."
                className="remove-vowels__input"
            />

            <label className="remove-vowels__label">
                Después de la magia tu texto se ve así:
            </label> 
                
            <div className='remove-vowels__result'>
                {removeVowels(text)}
            </div>
        </div>
    );
}

export default Words;