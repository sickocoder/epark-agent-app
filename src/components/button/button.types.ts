import { ReactElement } from 'react';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonWrapperProps {
  variant?: ButtonVariant;
}

export interface ButtonProps extends ButtonWrapperProps {
  onPress?: () => void;
  disabled?: boolean;
  children: string | ReactElement;
  loading?: boolean;
}
