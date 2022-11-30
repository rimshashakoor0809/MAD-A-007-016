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
} from 'react-native';

export default function Register({navigation}) {
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
        <Text style={styles.mainHeading}>
          Run your business, we'll run the recruitment. 🚀
        </Text>
        <Text style={styles.subHeading}>We're good at what we do!</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formControls}>
          <Text style={styles.labelemail}>username</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your username or email"
          />
        </View>

        <View style={styles.formControls}>
          <Text style={styles.labelemail}>email</Text>
          <TextInput style={styles.txtInput} placeholder="Enter your email" />
        </View>

        <View style={styles.formControls}>
          <View style={styles.password}>
            <Text style={styles.label}>password</Text>
          </View>
          <TextInput style={styles.txtInput} placeholder="********" />
        </View>

        <View style={styles.formControls}>
          <View style={styles.remember}>
            <View style={styles.checkbox}></View>
            <Text style={styles.labelRemember}>
              I agree to privacy policy & terms
            </Text>
          </View>
        </View>

        <View style={styles.formControls}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.BtnText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formControls}>
          <View style={styles.registerControls}>
            <Text style={styles.register}>Already have an account?</Text>
            <Text
              style={styles.register1}
              onPress={() => navigation.navigate('Login')}>
              Sign in instead
            </Text>
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
  },
  logo: {
    width: 150,
    height: 150,
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginBottom: 20,
    marginTop:-25
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
