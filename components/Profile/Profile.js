import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useUsers} from '../../UserContext';

export const Profile = ({navigation, route}) => {
  const {users} = useUsers();
  const [user, setUser] = useState({});

  useEffect(() => {
    const {email} = route.params;
    let user = {};
    for (const u of users) {
      if (u.email === email) {
        user = u;
        setUser(user);
        return;
      }
    }
  }, []);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        
        <View style={styles.field}>
          <Text style={styles.txt}>Name:</Text>
          <Text style={styles.val}>{user.name}</Text>
        </View>
        
        <View style={styles.field}>
          <Text style={styles.txt}>Email:</Text>
          <Text style={styles.val}>{user.email}</Text>
        </View>
        
        <View style={styles.field}>
          <Text style={styles.txt}>Gender:</Text>
          <Text style={styles.val}>{user.gender}</Text>
        </View>
        
        <View style={styles.field}>
          <Text style={styles.txt}>Phone:</Text>
          <Text style={styles.val}>{user.phone}</Text>
        </View>
        
        <View style={styles.field}>
          <Text style={styles.txt}>DOB:</Text>
          <Text style={styles.val}>{user.dob}</Text>
        </View>

        <Button title="Set your schedule" onPress={() => navigation.navigate('Schedule', {schedules: user.schedules, email: user.email})}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    height: 250,
    width: '70%',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 15
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  val: {
    color: 'white',
    textAlign: 'right',
    fontFamily: 'monospace'
  },
  field: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
