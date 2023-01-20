import { FC } from 'react';

import { Box } from '../../../../../components';
import { paymentOptions } from './payment-method.data';
import { TPaymentMethodOption } from './payment-method.types';
import PaymentMethodOption from './payment-method-option';

const PaymentMethod: FC<{
  selectedOption: TPaymentMethodOption;
  onOptionSelected: (option: TPaymentMethodOption) => void;
}> = ({ selectedOption, onOptionSelected }) => (
  <Box flex={1} flexDirection="row" marginTop="24px" height="56px">
    {paymentOptions.map((paymentOption, index) => {
      if (index === 1) return <Box key={paymentOption.value} width="12px" />;

      return (
        <PaymentMethodOption
          key={paymentOption.value}
          {...paymentOption}
          selected={
            selectedOption && selectedOption.value === paymentOption.value
          }
          onOptionSelect={onOptionSelected}
        />
      );
    })}
  </Box>
);

export default PaymentMethod;
