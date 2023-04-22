import { View, Text, TextInput, KeyboardAvoidingView, Button, Alert } from 'react-native'
import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore"
import { auth, db } from '../../firebase';

const Register = () => {
  const [number, onChangeNumber] = React.useState('');
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');

  const handleRegistration = () => {
    if (number === '' || number1 === '' || number2 === '' || number2 === '') {
      Alert.alert('Invalid', 'Fill all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    createUserWithEmailAndPassword(auth, number, number1)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const email = user.email;
        const uid = auth.currentUser?.uid;

        setDoc(doc(db, "users", `${uid}`), {
          email: email,
          phone: number2,
          location: number3
        })
        console.log("success", user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("fail", errorMessage)
      });


  }
  return (
    <View className='flex-1 bg-white'>
      <Text className='text-center text-2xl font-bold mt-20'>Register</Text>
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
        <TextInput
          className='p-2 border-2 mb-2 rounded-lg'
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="phone"
          keyboardType="default"
        />
        <TextInput
          className='p-2 border-2 mb-2 rounded-lg'
          onChangeText={onChangeNumber3}
          value={number3}
          placeholder="location"
          keyboardType="default"
        />
        <Button
          onPress={() => handleRegistration()}
          title="Register"
          color="#841584"
        />
      </View>

    </View>
  )
}

export default Register