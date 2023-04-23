import { View, Text, Button, TextInput, Alert } from 'react-native'
import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
  const [number, onChangeNumber] = React.useState('');
  const [number1, onChangeNumber1] = React.useState('');

  const handleLogin = () => {

    if (auth.currentUser?.emailVerified === false) {
      console.log("Verify your email first")
    } else {

      signInWithEmailAndPassword(auth, number, number1)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential;
          console.log("Login Success", user)
          // ...
        })
        .catch((error) => {
          const e = error.code;
          if (e === "auth/wrong-password") {
            alert("Wrong Password")
          } else if (e === "auth/invalid-email") {
            alert("Invalid Email")
          } else if (e === "auth/user-not-found") {
            alert("Email does not exist")
          } else if (e === "auth/too-many-request") {
            alert("Wait for 2 mins and try again")
          } else {
            alert("Check your details and try again")
          }

        });
    }
  }
  return (
    <View className='flex-1'>
      <Text>Login</Text>
      <View className='justify-center mt-20 mx-4'>
        <TextInput
          className='p-2 border-2 mb-2 rounded-lg'
          onChangeText={onChangeNumber}
          value={number}
          placeholder="email"
          keyboardType="default"
        />
        <TextInput
          className='p-2 border-2 mb-2 rounded-lg'
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="password"
          keyboardType="default"
        />
        <Button
          onPress={() => handleLogin()}
          title="Login"
          color="#841584"
        />
      </View>
    </View>
  )
}

export default Login