import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import DocumentPicker  from 'react-native-document-picker';

export default class Document extends Component {
  async UploadDocument() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],

      });
      Alert.alert("Document uploaded successfully");
      
    }
    catch (err) {
      if (DocumentPicker.isCancel(err)) {

      }
      else {
        throw err;
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.UploadDocument()}>
          <Text> Please upload your resume </Text>
        </TouchableOpacity>

      </View>
    )


  }

}
const styles = StyleSheet.create({
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
  companyCard: {
    borderWidth: 3,
    borderColor: '#fca311',
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    width: 150,
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
