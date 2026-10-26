import { createContext, useContext } from 'react';
import { GameProviderType } from './types';

export const GameContext = createContext({} as GameProviderType);

export const useGameContext = () => {
    const context = useContext(GameContext);

    if (!context) throw new Error('useGameContext must be use inside useGameContext');

    return context;
};
