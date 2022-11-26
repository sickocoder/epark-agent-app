export type TVariant = 'heading' | 'normal';

export interface TextProps {
  variant?: TVariant;
  children: string;
  align?: 'left' | 'right' | 'center';
  color?: string;
}

export interface TextWrapperProps {
  variant: TVariant;
  align: 'left' | 'right' | 'center';
  color?: string;
}
