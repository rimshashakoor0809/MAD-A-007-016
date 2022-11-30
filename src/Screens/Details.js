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

export default function Details() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.companyContainer}>
        <Image
          style={styles.btnImg}
          source={require('../Images/wishlist.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.companyImg}
          source={require('../Images/skyline.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.btnImg}
          source={require('../Images/resume.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.jobInfoContainer}>
        <Text style={styles.companyTitle}>System Administrator</Text>
        <Text style={styles.companysubtitleHeading}>Contour Software</Text>
        <Text style={styles.companysubHeading}>📌</Text>
        <Text style={styles.companysubHeading}>Karachi, Pakistan</Text>
        <Text style={styles.companysubHeading}>Experience Doesn't Matter</Text>
        <Text style={styles.companysubHeading}>Conputer Networking</Text>
      </View>
      <View style={styles.publishedContainer}>
        <View style={styles.publishContainer}>
          <Text style={styles.published}>PUBLISHED</Text>
          <Text style={styles.publishedText}>Nov 21, 2022</Text>
        </View>
        <View style={styles.appliedContainer}>
          <Text style={styles.applied}>APPLY BY</Text>
          <Text style={styles.appliedText}>Feb 21,2023</Text>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableData1}>Industry</Text>
          <Text style={styles.tableData}>Information Technology</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData1}>Job Type</Text>
          <Text style={styles.tableData}>Fulltime</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData1}>Department</Text>
          <Text style={styles.tableData}>IT</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData1}>Career Level</Text>
          <Text style={styles.tableData}>Experienced Professional</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableData1}>Gender</Text>
          <Text style={styles.tableData}>No Preference</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.jobtitle}>JOB DESCRIPTION</Text>
        <Text style={styles.jobdesc}>
          Contour Software is a wholly owned subsidiary of Constellation
          Software Inc. (CSI), which acquires, manages and builds market-leading
          software businesses that develop industry-specific, mission-critical
          enterprise software solutions to serve both the public and private
          sectors. Prior to going public in 2006, CSI won the prestigious
          "Canada's 50 Best Managed Companies” award in 2005. Headquartered in
          Toronto, Canada, and with a global presence, CSI's subsidiaries
          operate in more than 80 different industries in over 100 countries,
          generating annual revenues in excess of $3 Billion. Contour Software
          currently houses remote employees for more than 80 Departments (R&D,
          Finance, IT, Customer Support, Professional Services and Other)
          belonging to more than 40 of CSI's 500+ divisions, in 3 offices [KHI,
          LHE & ISB]. Contour employees are key players in implementing,
          supporting, extending, enhancing, and renewing enterprise systems that
          run thousands of medium and large businesses as well as public
          institutions, globally.
        </Text>
        <Text style={styles.jobtitle}>THE DIVISION</Text>
        <Text style={styles.jobdesc}>
          PROXIA Software AG is headquartered in Ebersberg, Germany, and
          develops, deploys and supports Manufacturing Execution System (MES)
          software to improve the planning process, performance management and
          KPI tracking at customers in the capital equipment, tooling,
          automotive, plastics and chemical sectors. The Position The division
          is looking for a Senior Systems Administrator, who will be responsible
          for monitoring and managing a corporate MS Office 365 environment,
          monitoring and managing on premise servers (Production and QA
          environments), as well as managing security, backups and desktop
          support for approximately 25 employees. The selected candidate shall
          work out of the Contour Software Karachi office, working as part of
          the resource-center team, as an extension of the onshore IT team.
        </Text>
        <Text style={styles.jobtitle}>JOB DUTIES AND RESPONSIBILITIES</Text>
        <Text style={styles.jobdesc}>
          • Support of end users for hardware or software issues  \n • Responsible
          as tier 1 and 2 escalation path for the service desk for the
          following: Servers, desktop computers, printers, routers, switches,
          firewalls, phones, personal digital assistants, smartphones, software
          and software deployment, security updates and patches\n • Responsible
          for solving hardware and software issues Responsible for installing,
          configurating, and maintaining the reliable operation of computer
          systems, network servers, and virtualization while adhering to network
          and system security standards.\n
          • Responsible for data security
          (antivirus, antispam, firewall) and compliance with data security
          standards (GDPR) .
        </Text>
        <Text style={styles.jobtitle}>
          REQUIRED QUALIFICATIONS AND EXPERIENCE
        </Text>
        <Text style={styles.jobdesc}>
          PROXIA Software AG is headquartered in Ebersberg, Germany, and
          develops, deploys and supports Manufacturing Execution System (MES)
          software to improve the planning process, performance management and
          KPI tracking at customers in the capital equipment, tooling,
          automotive, plastics and chemical sectors. The Position The division
          is looking for a Senior Systems Administrator, who will be responsible
          for monitoring and managing a corporate MS Office 365 environment,
          monitoring and managing on premise servers (Production and QA
          environments), as well as managing security, backups and desktop
          support for approximately 25 employees. The selected candidate shall
          work out of the Contour Software Karachi office, working as part of
          the resource-center team, as an extension of the onshore IT team.
        </Text>
        <Text style={styles.jobtitle}>ADDITIONAL QUALIFICATIONS</Text>
        <Text style={styles.jobdesc}>
          PROXIA Software AG is headquartered in Ebersberg, Germany, and
          develops, deploys and supports Manufacturing Execution System (MES)
          software to improve the planning process, performance management and
          KPI tracking at customers in the capital equipment, tooling,
          automotive, plastics and chemical sectors. The Position The division
          is looking for a Senior Systems Administrator, who will be responsible
          for monitoring and managing a corporate MS Office 365 environment,
          monitoring and managing on premise servers (Production and QA
          environments), as well as managing security, backups and desktop
          support for approximately 25 employees. The selected candidate shall
          work out of the Contour Software Karachi office, working as part of
          the resource-center team, as an extension of the onshore IT team.
        </Text>
        <Text style={styles.jobtitle}>BENEFITS WE OFFER</Text>
        <Text style={styles.jobdesc}>
          PROXIA Software AG is headquartered in Ebersberg, Germany, and
          develops, deploys and supports Manufacturing Execution System (MES)
          software to improve the planning process, performance management and
          KPI tracking at customers in the capital equipment, tooling,
          automotive, plastics and chemical sectors. The Position The division
          is looking for a Senior Systems Administrator, who will be responsible
          for monitoring and managing a corporate MS Office 365 environment,
          monitoring and managing on premise servers (Production and QA
          environments), as well as managing security, backups and desktop
          support for approximately 25 employees. The selected candidate shall
          work out of the Contour Software Karachi office, working as part of
          the resource-center team, as an extension of the onshore IT team.
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
  tableData: {
    color: 'black',
    fontSize: 12,
    marginRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  tableData1: {
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
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#14213d',
    width: 1000,
    marginTop: 20,
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
