import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Box, Text, TextInput, Button } from '../../../components';
import { AnyObject } from '../../../types';

const LoginForm: FC<{ onSubmit: (values: AnyObject) => void }> = ({
  onSubmit,
}) => {
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
        disabled={!!errors.username || !!errors.password}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;
