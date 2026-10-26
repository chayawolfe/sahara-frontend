import { createContext, useContext } from 'react';
import { SportsProviderType } from './types';

export const SportsContext = createContext({} as SportsProviderType);

export const useSportsContext = () => {
    const context = useContext(SportsContext);

    if (!context) throw new Error('useSportsContext must be use inside useSportsContext');

    return context;
};
