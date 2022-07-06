import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import SelectBox from 'react-native-multi-selectbox'

const genderSelectOptions = [
  {
    item: 'Male',
    id: 'm'
  },
  {
    item: 'Female',
    id: 'f'
  },
  {
    item: 'Others',
    id: 'o'
  }
]

export const Signin = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.heading}>Form</Text>
        
        <TextInput placeholder="Name" style={styles.input} />

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Phone"
          style={styles.input}
          keyboardType='number-pad'
          maxLength={10}
        />

        <SelectBox 
          label="Gender"
          options={genderSelectOptions}
          value='m'
          hideInputFilter={true}
          onChange={(value) => console.log(value)}
          // containerStyle={styles.selectBox}
          optionsLabelStyle={styles.label}
          // optionContainerStyle={styles.optContainer}
          labelStyle={{color: 'white'}}
          // inputPlaceHolder
          width="80%"
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />

        <View>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('Signin')}
            >
            <Text style={styles.btnTxt}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    margin: 20,
    backgroundColor: 'black',
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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

  btn: {
    margin: 10,
    color: 'white',
    backgroundColor: 'rgb(89, 54, 146)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 18,
  },
  heading: {
    fontSize: 35,
    textAlign: 'left',
    width: '80%',
    color: 'white',
  },
  label: {
    color: ' white'
  },
  optContainer:{
    color: 'white'
  }
});
