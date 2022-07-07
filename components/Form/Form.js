import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, ToastAndroid} from 'react-native';
import {useUsers} from '../../UserContext'

export const Form = (props) => {
  const {navigation, route} = props
  const users = useUsers()
  const [credentials, setCredentials] = useState({email: '', password: ''})

  const login = () => {
    const verify = users.verifyUser(credentials.email, credentials.password)
    console.log(verify, users)
    if(verify) navigation.navigate('Profile')
    else {
      ToastAndroid.show(
        'Wrong Credentials', 
        ToastAndroid.SHORT)
    }
  }


  return (
    <View style={styles.formContainer}>

      <View style={styles.form}>
        
        <Text style={styles.heading}>Form</Text>
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          keyboardType="email-address"
          nativeID='email'
          onChange={(e) => setCredentials({...credentials, email: e.nativeEvent.text})}
          />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          nativeID='password'
          onChange={(e) => setCredentials({...credentials, password: e.nativeEvent.text})}
        />

        <View style={styles.btns}>
          <Pressable style={styles.btn} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.btnTxt}>Sign up</Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={login}>
            <Text style={styles.btnTxt}>Log in</Text>
          </Pressable>
        </View>
  
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
    formContainer: {
        flex:1,
        justifyContent: 'center'
    },
  form: {
    margin: 20,
    backgroundColor: 'black',
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  input: {
    borderColor: 'white',
    borderWidth: 2,
    width: '80%',
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 3,
    margin: 5,
  },
  btns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '50%',
    margin: 5,
  },
  btn: {
    color: 'white',
    backgroundColor: 'rgb(89, 54, 146)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5
  },
  btnTxt: {
    fontSize: 18,
  },
  heading: {
    fontSize: 35,
    textAlign: 'left',
    width: '80%',
    color: 'white'
  }
});
