import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Box, Button, TextInput } from '../../../components';
import { AnyObject } from '../../../types';

const LoginForm: FC<{
  isLoading: boolean;
  onSubmit: (values: AnyObject) => void;
}> = ({ onSubmit, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Box>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nome de usuário"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            error={errors.username}
          />
        )}
        name="username"
      />
      <Box height="12px" />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Palavra-passe"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.password}
          />
        )}
        name="password"
      />
      <Box height="48px" />

      <Button
        variant="primary"
        onPress={handleSubmit(onSubmit)}
        disabled={!!errors.username || !!errors.password || isLoading}
        loading={isLoading}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;
