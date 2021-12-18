import React from 'react';
import '../../../App.css';
import { Character } from '../../../types';

export interface CharacterCardProps {
    character: Character,
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
    character,
}) => {

    const { name, image } = character;

    return (                    
            <div className='card'>
                <h4> {name} </h4>
                {image ? <img src={image} alt={name} width="200" height="200" /> : null}
            </div>        
    );
}