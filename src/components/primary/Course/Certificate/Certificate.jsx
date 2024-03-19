import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo from '../../../../assets/images/certificateImages/Robert_Brown.png';
import sign from '../../../../assets/images/certificateImages/Robert_Brown (1) (1).png';
import CertificateText from './CertificateText';
import CertificateDescription from './CertificateDescription';
import poppinsrc from './Poppins-Regular.ttf';
// import poppinsrc from './NotoSansBengali-Regular.ttf';
Font.register({
  family: 'Poppins',
  src: poppinsrc,
});
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // display: 'flex',
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'Poppins',
  },
  section: {
    // margin: 10,
    marginLeft: 20,
    // marginRight: 200,
    flexGrow: 1,
  },
  section2: {
    marginRight: 260,
  },
  text1: {
    color: 'blue',
  },
  text2: {
    fontSize: '18px',
  },
  logo: {
    height: '595px',
    width: '140px',
  },
  sign: {
    marginTop: '30px',
    height: '100px',
    width: '130px',
  },
});
const Certificate = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.logo} src={logo} alt="none" />
        </View>
        <View style={styles.section2}>
          <CertificateText />
          <CertificateDescription />
          <Image style={styles.sign} src={sign} alt="none" />
        </View>
      </Page>
    </Document>
  );
};

export default Certificate;
