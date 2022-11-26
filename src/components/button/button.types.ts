import { ReactElement } from 'react';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonWrapperProps {
  variant?: ButtonVariant;
}

export interface ButtonProps extends ButtonWrapperProps {
  onClick?: () => void;
  children: string | ReactElement;
}
