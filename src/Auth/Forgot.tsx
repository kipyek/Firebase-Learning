import { View, Text, Button, TextInput, Alert } from 'react-native'
import React from 'react'
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Forgot = () => {
  const [number, onChangeNumber] = React.useState('');
  const [number1, onChangeNumber1] = React.useState('');

  const handleReset = () => {
    if (number !== number1) {
      alert("passwords are not matching")
    }
    const user = auth.currentUser;
    updatePassword(user, number).then(() => {
      console.log("password reset")
      // Update successful.
    }).catch((error) => {
      console.log(error)
      // An error ocurred
      // ...
    });
  }
  return (
    <View className='flex-1'>
      <Text>Login</Text>
      <View className='justify-center mt-20 mx-4'>
        <TextInput
          className='p-2 border-2 mb-2 rounded-lg'
          onChangeText={onChangeNumber}
          value={number}
          placeholder="password"
          keyboardType="default"
        />
        <TextInput
          className='p-2 border-2 mb-2 rounded-lg'
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="confirm password"
          keyboardType="default"
        />
        <Button
          onPress={() => handleReset()}
          title="Reset"
          color="#841584"
        />
      </View>
    </View>
  )
}

export default Forgot