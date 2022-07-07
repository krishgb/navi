import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import SelectBox from 'react-native-multi-selectbox'
import DatePicker from 'react-native-date-picker'
import {useUsers} from '../../UserContext'

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

export const Signup = ({navigation}) => {
  const users = useUsers()

  const [gender, setGender] = useState({})
  const [dateOpen, setDateOpen] = useState(false)
  const [dob, setDob] = useState(new Date())
  const [dateText, setDateText] = useState('')

  const [values, setValues] = useState({})


  useEffect(() => {
    setDateText(`${dob.getDate()}-${dob.getMonth()+1}-${dob.getFullYear()}`)
    setValues({...values, dob: `${dob.getDate()}-${dob.getMonth()+1}-${dob.getFullYear()}`})
  }, [dob])

  useEffect(() => {
    console.log(values)
  }, [values])

  const signin = () => {
      users.newUser(values)
      navigation.navigate('Form')
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.heading}>Form</Text>
        
        <TextInput placeholder="Name" 
          style={styles.input} 
          onChange={e => setValues({...values, name: e.nativeEvent.text})}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          onChange={e => setValues({...values, email: e.nativeEvent.text})}
        />

        <TextInput
          placeholder="Phone"
          style={styles.input}
          keyboardType='number-pad'
          maxLength={10}
          onChange={e => setValues({...values, phone: e.nativeEvent.text})}
        />


      <Text style={styles.dateTitle}>Date of Birth</Text>
        <Text 
          onPress={() => setDateOpen(true)}
          style={styles.dobText}
        >
          {dateText} </Text>
        <DatePicker 
          modal
          mode='date'
          date={dob}
          open={dateOpen}
          onConfirm={(date) => {
          setDateOpen(false)
          setDob(date)
        }}
        onCancel={() => {
          setDateOpen(false)
        }}
        textColor='white'
          />

        <SelectBox 
          label="Gender"
          options={genderSelectOptions}
          value={gender}
          hideInputFilter={true}
          onChange={(value) => {setGender(value); setValues({...values, gender: value.item})}}
          optionsLabelStyle={styles.label}
          labelStyle={{color: 'white'}}
          containerStyle={{backgroundColor: '#aaa', padding: 10, borderRadius: 2}}
          width="80%"
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChange={e => setValues({...values, password: e.nativeEvent.text})}
        />

        <View>
          <Pressable
            style={styles.btn}
            onPress={signin}
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
  },
  dobText: {
    borderColor: 'white',
    borderWidth: 2,
    width: '80%',
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 3,
    margin: 5,
    padding: 10
  },
  dateTitle: {
    textAlign: 'left',
    color: 'white',
    width: '80%',
    fontSize: 14
  }
});