import React from 'react';
import '../../App.css';
import { Character } from '../../types';

export const AmigosPage = () => {

    const [characters, setCharacters] = React.useState<Character[]>([]);
    const [currentInput, setCurrentInput] = React.useState<string>('');

    const addCharacter = () => {
        const newCharacter: Character = {
            name: currentInput,
        }
        // Check this out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const newCharactersList = [...characters, newCharacter];
        setCharacters(newCharactersList);
        console.log('current list ---->' , newCharactersList);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // What is the problem with this approach? Read about debouncing.
        e.preventDefault();
        setCurrentInput(e.target.value); // Hint <- this is the problem. think about state and re-rendering.
    }

    return (
        <> 
            <h2> Amigos Page </h2>
            <div className='amigos-form-container'>
                <input onChange={handleInputChange} />
                <button className='add-button' onClick={addCharacter}> + </button>
            </div>
        </>
    );
}