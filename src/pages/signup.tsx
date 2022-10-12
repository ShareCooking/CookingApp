import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="SignUp" />
      </Appbar.Header>
      <View style={{ padding: 10 }}>
        <TextInput label="ID" />
        <TextInput style={{ marginTop: 10 }} label="Password" secureTextEntry />
        <TextInput
          style={{ marginTop: 10 }}
          label="Confirm Password"
          secureTextEntry
        />
        <TextInput style={{ marginTop: 10 }} label="Address" />
        <TextInput style={{ marginTop: 10 }} label="Phone" />
        <TextInput style={{ marginTop: 10 }} label="Birthday" />
        <Button style={{ marginTop: 10 }} mode="outlined">
          Create New Account
        </Button>
      </View>
    </SafeAreaView>
  );
}
