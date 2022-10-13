import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function SignIn() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  function onSubmit(data: { id: string; password: string; }) {
    console.log('onSubmit', data);
  }

  return (
    <View style={{ padding: 10, justifyContent: 'center', height: '100%' }}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput label="ID / e-mail"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="id"
      />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={{ marginTop: 10 }} label="Password" secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <Button style={{ marginTop: 10 }} mode="outlined" onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
      <Button style={{ marginTop: 10 }} mode="text" onPress={() => navigation.navigate('SignUp' as never)}>
        Sign Up
      </Button>
    </View>
  );
}
