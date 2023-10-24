import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export function useStyleTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useStyleTheme must be used within a ThemeContextProvider');
  }

  const { primary, secondary } = theme;

  const styleTextPrimary = {
    backgroundColor: primary.backgroundColor,
    color: primary.textColor,
    padding: primary.padding,
    borderRadius: primary.borderRadius,
  };

  const styleTextSecondary = {
    backgroundColor: secondary.backgroundColor,
    color: secondary.textColor,
    padding: secondary.padding,
    borderRadius: secondary.borderRadius,
  };

  return {
    styleTextPrimary,
    styleTextSecondary,
  };
}
