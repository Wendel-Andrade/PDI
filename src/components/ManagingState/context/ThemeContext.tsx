import { createContext } from 'react';

import THEME from './theme';

export const ThemeContext = createContext<typeof THEME | null>(null);
