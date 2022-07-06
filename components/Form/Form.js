import React, {useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

export const Form = (props) => {
  const {navigation, route} = props
  console.log(route.params)
  return (
    <View style={styles.formContainer}>

      <View style={styles.form}>
        
        <Text style={styles.heading}>Form</Text>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />

        <View style={styles.btns}>
          <Pressable style={styles.btn} onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.btnTxt}>Sign in</Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={() => navigation.navigate('Profile')}>
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
