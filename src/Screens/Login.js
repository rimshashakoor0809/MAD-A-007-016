import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { useState } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
export default function Login({ navigation }) {
  [username, setUsername] = useState('');
  [password, setPassword] = useState('');
  const _getUserCredentials = async () => {
    try {
      let user = await AsyncStorage.getItem('User_key');
      console.log(user);
      let pass = await AsyncStorage.getItem('Pass_key');
      console.log(pass);
      if (user === username && pass === password) {
        alert('Account Login Successfully');
        navigation.navigate('Home');
        setUsername('');
        setPassword('');
      }
      else {
        alert('failed to Login');
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <KeyboardAvoidingView style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../Images/irenic-logo-transparent.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Welcome to Irenic! 👋</Text>
        <Text style={styles.subHeading}>
          Please sign-in to your account and start your recruitment drive!
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formControls}>
          <Text style={styles.labelemail}>email or username</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your username or email"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.formControls}>
          <View style={styles.password}>
            <Text style={styles.label}>password</Text>
            <Text style={styles.labelLink}>Forgot password?</Text>
          </View>
          <TextInput style={styles.txtInput}
            placeholder="********"
            value={password} onChangeText={setPassword}/>
        </View>

        <View style={styles.formControls}>
          <View style={styles.remember}>
            <View style={styles.checkbox}></View>
            <Text style={styles.labelRemember}>Remember Me</Text>
          </View>
        </View>

        <View style={styles.formControls}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => _getUserCredentials()}>
            <Text style={styles.BtnText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formControls}>
          <View style={styles.registerControls}>
            <Text style={styles.register}>New on our platform?</Text>
            <Text style={styles.register1} onPress={()=>navigation.navigate('Register')}>Create an account</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginBottom: 25,
  },
  mainHeading: {
    color: '#14213d',
    fontFamily: 'helvetica',
    fontSize: 28,
    fontWeight: 'semibold',
    opacity: 0.7,
  },
  subHeading: {
    color: '#566A7F',
    fontFamily: 'helvetica',
    fontSize: 16,
    marginTop: 10,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControls: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 15,
    width: 340,
  },
  label: {
    textTransform: 'uppercase',
    color: '#566A7F',
    fontSize: 14,
  },
  labelemail: {
    textTransform: 'uppercase',
    color: '#566A7F',
    marginBottom: 10,
    fontSize: 14,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 10,
    padding: 10,
    color: 'gray',
    fontSize: 12,
  },
  password: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelLink: {
    color: '#fca311',
  },
  remember: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    marginRight: 10,
  },
  labelRemember: {
    textTransform: 'capitalize',
    color: '#566A7F',
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: '#fca311',
    width: 340,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    shadowColor: '#fca311',
  },
  BtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    color: '#566A7F',
    fontSize: 12,
    marginRight: 5,
  },
  register1: {
    color: '#fca311',
    fontSize: 14,
  },
});