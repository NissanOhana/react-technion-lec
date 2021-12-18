import React from 'react';
import '../../App.css';
import { Character } from '../../types';
import { About } from './AboutPage/About';
import { AmigosPage } from './AmigosPage/Amigos';
import { FAQ } from './FAQPage/FAQ';

export interface PageLayoutProps {
    page: number;
    characters: Character[];
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}
export const PageLayout: React.FC<PageLayoutProps> = ({
    page,
    characters,
    setCharacters,
}) => {

    switch(page) {
        case 0:
            return <AmigosPage characters={characters} setCharacters={setCharacters} />            
        case 1:
            return <About />
        case 2:
            return <FAQ />
        default:
            return null;            

    }
}