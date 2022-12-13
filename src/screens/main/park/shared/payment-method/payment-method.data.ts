import {
  CashGraySvgComponent,
  CashYellowSvgComponent,
  RefPaymentGraySvgComponent,
  RefPaymentYellowSvgComponent,
} from '../../../../../components/SVG';
import { TPaymentMethodOption } from './payment-method.types';

// eslint-disable-next-line import/prefer-default-export
export const paymentOptions: ReadonlyArray<TPaymentMethodOption> = [
  {
    icon: CashGraySvgComponent,
    selectedIcon: CashYellowSvgComponent,
    label: 'Em Cash',
    value: 'cash',
    enabled: true,
  },
  { value: 'spacer' } as unknown as TPaymentMethodOption,
  {
    icon: RefPaymentGraySvgComponent,
    selectedIcon: RefPaymentYellowSvgComponent,
    label: 'Por Ref.',
    value: 'ref',
    enabled: false,
  },
];
