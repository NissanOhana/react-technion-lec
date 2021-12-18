import React from 'react';
import '../../../App.css';
import { Character } from '../../../types';
import { CharacterCard } from './CharacterCard';

export interface AmigosPageProps {
    characters: Character[];
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const AmigosPage: React.FC<AmigosPageProps> = ({
    characters,
    setCharacters,
}) => {
   
    const [currentInput, setCurrentInput] = React.useState<string>('');

    const addCharacter = () => {
        if (currentInput === '') {
            alert('יא שובב, לא הכנסת דמות!');
            return;
            // Can you think about other validations? duplications? security issues?
        }
        const newCharacter: Character = {
            name: currentInput,
        }
        // Check this out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const newCharactersList = [...characters, newCharacter];
        setCharacters(newCharactersList);
    }

    const addRandomCharacter = async() => {
        const randomNumber = Math.floor(Math.random() * 100);
       let newCharacterFromApi;
       try {
            newCharacterFromApi = await fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`);
            newCharacterFromApi = await newCharacterFromApi.json();
       } catch(e) {
            console.error(e);
       }


       if (newCharacterFromApi && newCharacterFromApi?.name !== '') {
        const newCharacter: Character = {
            name: newCharacterFromApi.name,
            image: newCharacterFromApi.image,
        }
        const newCharactersList = [...characters, newCharacter];
        setCharacters(newCharactersList);
       }
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
                <button className='add-button' onClick={addRandomCharacter}> Random </button>                
            </div>
            <div className='cards-container'>
            {   characters.length > 0 ? 
                    characters.map(character => 
                    <CharacterCard key={Math.random()} character={character}/>) :
                    
                    <h2> Hi! No Character yet! </h2>
            }
             </div>
        </>
    );
}