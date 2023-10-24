import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onClick(event);
      }}
    >
      {children}
    </button>
  );
}
