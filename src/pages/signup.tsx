import { useNavigation } from '@react-navigation/native';
import { omit } from 'lodash';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import * as Fetch from '../utils/fetch';

export default function SignUp() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      id: '',
      password: '',
      confirmPW: '',
      address: '',
      phone: '',
      birthday: '',
    },
  });

  async function onSubmit(data: any) {
    console.log('data', data);
    const body = omit(data, 'confirmPW');
    console.log('body', body);
    const response = await Fetch.post('http://localhost:8080//cooking/main/regist.do', body );
    console.log('response', response);
  }

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="SignUp" />
      </Appbar.Header>
      <View style={{ padding: 10 }}>
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput label="ID"
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
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={{ marginTop: 10 }}
              label="Confirm Password"
              secureTextEntry  
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPW"
        />
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={{ marginTop: 10 }}
              label="Address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
        />
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={{ marginTop: 10 }}
              label="Phone"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phone"
        />
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={{ marginTop: 10 }}
              label="Birthday"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="birthday"
        />
        <Button style={{ marginTop: 10 }} mode="outlined" onPress={handleSubmit(onSubmit)}>
          Create New Account
        </Button>
      </View>
    </SafeAreaView>
  );
}
