import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Box, Button, TextInput } from '../../../../components';
import { AddAutomobileFormProps } from './add-automobile.types';

const AddAutomobileForm: FC<AddAutomobileFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ownerName: '',
      licensePlate: '',
      licenseRegistrationNumber: '',
    },
  });

  const isThereAnyError = () =>
    Object.keys(errors).some((errorKey) => !!errors[errorKey]);

  return (
    <Box flexDirection="column" marginTop="8px">
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nome do proprietário"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.ownerName}
          />
        )}
        name="ownerName"
      />

      <Box height="12px" />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nº da matrícula"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.licensePlate}
          />
        )}
        name="licensePlate"
      />

      <Box height="12px" />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nº da carta"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.licenseRegistrationNumber}
          />
        )}
        name="licenseRegistrationNumber"
      />

      <Box height="20px" />

      <Button
        variant="primary"
        onPress={handleSubmit(onSubmit)}
        disabled={isThereAnyError() || isLoading}
        loading={isLoading}
      >
        Cadastrar
      </Button>
    </Box>
  );
};

export default AddAutomobileForm;
