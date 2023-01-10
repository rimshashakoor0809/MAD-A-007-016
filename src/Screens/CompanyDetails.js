import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function CompanyDetail({ navigation, route }) {
  const { data } = route.params;
  console.log(`My COmpanies: ${JSON.stringify(data)}`);
  const jobs = data;
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.companyContainer}>
        <Image
          style={styles.companyImg}
          source={require('../Images/skyline.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.jobInfoContainer}>
        <Text style={styles.companyTitle}>{jobs.title}</Text>
        <Text style={styles.companysubtitleHeading}>{jobs.website}</Text>
        <Text style={styles.companysubHeading}>📌</Text>
        <Text style={styles.companysubHeading}>{jobs.address}</Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tablejobs1}>Website</Text>
          <Text style={styles.tablejobs}>{jobs.website}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tablejobs1}>Email</Text>
          <Text style={styles.tablejobs}>{jobs.email}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tablejobs1}>Phone Number</Text>
          <Text style={styles.tablejobs}>{jobs.phoneNumber}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tablejobs1}>Address</Text>
          <Text style={styles.tablejobs}>{jobs.address}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.jobtitle}>JOB DESCRIPTION</Text>
        <Text style={styles.jobdesc}>
          {jobs.description}
        </Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.copyright}>©2022 Irenic</Text>
        <View style={styles.linkBox}>
          <Text style={styles.linkItem}>Privacy Centre</Text>
          <Text style={styles.linkItem}>Cookies</Text>
          <Text style={styles.linkItem}>Privacy</Text>
          <Text style={styles.linkItem}>Terms</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  companyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  btnImg: {
    width: 40,
    height: 40,
  },
  companyImg: {
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    padding: 10,
  },
  jobInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  companyTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
  },
  companysubtitleHeading: {
    color: 'black',
    fontSize: 14,
    marginBottom: 25,
    opacity: 0.5,
  },
  companysubHeading: {
    color: 'black',
    fontSize: 14,
    opacity: 0.5,
  },
  publishedContainer: {
    width: 380,
    height: 50,
    backgroundColor: '#fca311',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  publishContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,

  },
  appliedContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 70,
  },
  published: {
    marginBottom: 2,
    color: '#14213d',
    opacity: 0.6,
  },
  publishedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  applied: {
    marginBottom: 2,
    color: '#14213d',
    opacity: 0.6,
  },
  appliedText: {
    color: 'white',
    fontWeight: 'bold',
  },

  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 10,
    opacity: 0.7,
    marginLeft: 10,
    marginRight: 10
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    alignItems: 'flex-start',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  tablejobs: {
    color: 'black',
    fontSize: 12,
    marginRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  tablejobs1: {
    color: 'black',
    fontSize: 12,
    marginRight: 20,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  jobtitle: {
    color: 'black',
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: 20,
    marginTop: 20,
  },
  jobdesc: {
    color: 'gray',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    marginBottom:80
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#14213d',
    width: 1000,
    marginTop: 50,
  },
  footerItem: {
    borderEndWidth: 1,
    borderStartColor: 'C',
    borderEndColor: '#fca311',
  },
  footerText: {
    color: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fca311',
  },
  bottom: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: '#d6d6d6'

  },
  copyright: {
    color: '#14213d',
    marginLeft: 30,
    marginTop: 5
  },
  linkBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 5,
  },
  linkItem: {
    color: '#14213d',
  },
});
