import React from 'react';
import '../../../App.css';
import { Character } from '../../../types';
import { CharacterCard } from '../AmigosPage/CharacterCard';


export const About = () => {
    
    const [ fetchingData, setFetchingData ] = React.useState(true);
    const [ aboutRandomCharacter, setAboutRandomCharacter ] = React.useState<Character>();

    React.useEffect(() => {
        
        const fetchData = async () => {            
            let newCharacterFromApi;
            try {
                newCharacterFromApi = await fetch(`https://rickandmortyapi.com/api/character/265`);
                newCharacterFromApi = await newCharacterFromApi.json();                
                // setFetching is false here
                setFetchingData(false)

            } catch (error) {
                // You can create an error state and set error here
                console.log(error);
            }
            if (newCharacterFromApi && newCharacterFromApi?.name !== '') {
                const newCharacter: Character = {
                name: newCharacterFromApi.name,
                image: newCharacterFromApi.image,
                }
                setAboutRandomCharacter(newCharacter);        
            }
        }

        // We acticed the async function
        fetchData();
        
    }, []) // Empty array - meaning that the effect will start only when the component mount.

    return (
        <div className='about-page-container'> 
        {aboutRandomCharacter && !fetchingData ? <CharacterCard character={aboutRandomCharacter}/> : 'Loading...'}
        <h2> Hi, this is the about page! </h2>        
        <h4> You can check the FAQ for some technical details about this project</h4>
        <a href='https://github.com/NissanOhana/react-technion-lec'> GitHub repo </a>
        <a href='https://rickandmortyapi.com/documentation/#rest'> The Rick and Morty API </a>
        </div>

    )
}