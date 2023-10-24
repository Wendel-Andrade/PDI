import { ReactNode, createContext, useContext } from 'react';
import { useRickAndMortyData } from '../hooks/useRickAndMortyData';

interface RickAndMortyApiProviderProps {
  children: ReactNode;
}

const RickAndMortyApiContext = createContext({});

export function RickAndMortyApiProvider({ children }: RickAndMortyApiProviderProps) {
  const rickAndMortyApiData = useRickAndMortyData();

  return <RickAndMortyApiContext.Provider value={rickAndMortyApiData}>{children}</RickAndMortyApiContext.Provider>;
}

export function useRickAndMortyDataContext(): any {
  const context = useContext(RickAndMortyApiContext);
  if (context === undefined) {
    throw new Error('useRickAndMortyDataContext must be used within a RickAndMortyDataProvider');
  }
  return context;
}
