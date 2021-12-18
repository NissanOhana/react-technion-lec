import React from 'react';
import { isBreakOrContinueStatement } from 'typescript';
import '../../App.css';
import { About } from './AboutPage/About';
import { AmigosPage } from './AmigosPage/Amigos';

export interface PageLayoutProps {
    page: number;
}
export const PageLayout: React.FC<PageLayoutProps> = ({
    page,
}) => {

    switch(page) {
        case 0:
            return <AmigosPage />            
        case 1:
            return <About />
        default:
            return null;            

    }
}