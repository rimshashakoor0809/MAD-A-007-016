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

export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.display} source={require('../Images/pic.jpeg')} />
        <Text style={styles.displayName}>Rimsha Shakoor</Text>
        <Image
          style={styles.messaging}
          source={require('../Images/chat.png')}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.search} placeholder="Search">
          Search
        </TextInput>
        <Image
          style={styles.setting}
          source={require('../Images/settings.png')}
        />
      </View>

      <ScrollView horizontal={true} style={styles.categoryContainer}>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../Images/design.png')}
          />
          <Text style={styles.categoryText}>Design</Text>
        </View>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../Images/tech.png')}
          />
          <Text style={styles.categoryText}>Tech</Text>
        </View>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../Images/business.png')}
          />
          <Text style={styles.categoryText}>Business</Text>
        </View>

        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../Images/tech.png')}
          />
          <Text style={styles.categoryText}>HR</Text>
        </View>
      </ScrollView>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Featured Jobs</Text>
        <Text style={styles.sectionButton}>View All</Text>
      </View>

      <ScrollView horizontal={true} style={styles.jobContainer}>
        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Recent Jobs</Text>
        <Text style={styles.sectionButton}>View All</Text>
      </View>

      <ScrollView horizontal={true} style={styles.jobContainer}>
        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobIconContainer}>
            <Image
              style={styles.jobIcon}
              source={require('../Images/snack-icon.png')}
            />
            <Image
              style={styles.jobIcon}
              source={require('../Images/bookmark.png')}
            />
          </View>
          <View style={styles.jobHeading}>
            <Text style={styles.jobCompany}> Google LLC</Text>
            <Text style={styles.jobTitle}> Sr. UX Designer</Text>
            <Text style={styles.jobLocation}> Islamabad, Pakistan</Text>
            <Text style={styles.jobType}> Fulltime</Text>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUploadedTime}>2 days ago</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.jobApplyButton}>
              <Text style={styles.jobApplytext}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Search By Companies</Text>
        <Text style={styles.sectionButton}>View All</Text>
      </View>

      <ScrollView horizontal={true} style={styles.jobContainer}>
        <View style={styles.companyCard}>
          <Image
            style={styles.companyImg}
            source={require('../Images/amazon.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.companyCard}>
          <Image
            style={styles.companyImg}
            source={require('../Images/hacker.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.companyCard}>
          <Image
            style={styles.companyImg}
            source={require('../Images/google.png')}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.footerText}>Contact Us</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerText}>Job Seekers</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerText}>Employers</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerText}>About</Text>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },

  display: {
    width: 42,
    height: 42,
    borderRadius: 50,
    marginLeft: 15,
    borderColor: '#fca311',
    borderWidth: 2,
  },
  displayName: {
    fontFamily: 'verdana',
    fontWeight: 'medium',
    marginLeft: 8,
    fontSize: 16,
    color: '#14213d',
  },
  messaging: {
    width: 25,
    height: 25,
    color: 'black',
    marginRight: 15,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d6d6d6',
    width: '95%',
    height: 40,
    marginLeft: 10,
    borderRadius: 10,
    marginBottom: 15,
    color: '#14213d',
    paddingLeft: 10,
  },
  search: {
    color: '#14213d',
    fontFamily: 'helvetica',
    paddingLeft: 2,
  },
  setting: {
    width: 20,
    height: 20,
    color: '#e5e5e5',
    marginRight: 15,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 5,
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 35,
    backgroundColor: '#fca311',
    borderRadius: 8,
    marginLeft: 10,
    elevation: 10,
    shadowColor: '#fca311',
  },
  categoryIcon: {
    width: 15,
    height: 15,
  },
  categoryText: {
    marginLeft: 3,
    fontFamily: 'helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#14213d',
    opacity: 0.7,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#515151',
    marginLeft: 10,
  },
  sectionButton: {
    fontFamily: 'helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 2,
    marginRight: 10,
  },
  jobContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  jobCard: {
    backgroundColor: '#14213d',
    width: 180,
    height: 200,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  jobIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  jobIcon: {
    width: 20,
    height: 20,
  },
  jobHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  jobCompany: {
    color: '#E2E2E2',
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    marginLeft: 2,
  },
  jobTitle: {
    color: 'white',
    fontFamily: 'helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  jobLocation: {
    color: 'lightgray',
    fontSize: 10,
    marginTop: 2,
    marginLeft: 5,
  },
  jobType: {
    width: 50,
    height: 16,
    backgroundColor: 'gray',
    fontSize: 10,
    color: 'white',
    fontFamily: 'helvetica',
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  jobInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  jobUploadedTime: {
    color: 'white',
    fontSize: 11.5,
    marginLeft: 18,
    marginTop: 5,
  },
  jobApplyButton: {
    width: 55,
    height: 25,
    backgroundColor: '#fca311',
    marginRight: 15,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobApplytext: {
    color: 'white',
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    fontSize: 12,
  },
  companyCard: {
    borderWidth: 3,
    borderColor: '#fca311',
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 15,
    padding: 10,
  },
  companyImg: {
    width: 140,
    height: 140,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: 1000,
    marginTop: 10,
  },
  footerItem: {
    borderEndWidth: 1,
    borderStartColor: 'C',
    borderEndColor: '#fca311',
  },
  footerText: {
    color: '#515151',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fca311',
    fontWeight: 'bold',
    opacity: 0.7
  },
  bottom: {
    marginTop: 15,
    // borderTopWidth: 1,
    // borderColor: '#d6d6d6',
  },
  copyright: {
    color: '#14213d',
    marginLeft: 30,
    marginTop: 5,
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
