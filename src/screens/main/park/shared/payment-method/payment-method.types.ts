import { SvgProps } from 'react-native-svg';

export interface TPaymentMethodOption {
  icon: (props: SvgProps) => JSX.Element;
  selectedIcon: (props: SvgProps) => JSX.Element;
  label: string;
  value: string;
  enabled: boolean;
}
