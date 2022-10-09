import React from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Login() {
  return (
    <View style={{ padding: 10 }}>
      <TextInput label="ID / e-mail" />
      <TextInput style={{ marginTop: 10 }} label="Password" secureTextEntry />
      <Button style={{ marginTop: 10 }} mode="outlined">
        Sign in
      </Button>
      <Button style={{ marginTop: 10 }} mode="text">
        Sign Up
      </Button>
    </View>
  );
}
