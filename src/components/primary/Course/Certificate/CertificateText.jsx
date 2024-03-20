import { Font, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import poppinsrc from './Poppins-ExtraBoldItalic.ttf';
const CertificateText = ({ certificate }) => {
  // Font.register({
  //   family: 'Poppins',
  //   src: poppinsrc,
  // });
  const styles = StyleSheet.create({
    text: {
      color: 'blue',
      fontSize: '14px',
    },
    text2: {
      marginTop: '20px',
      fontSize: '20px',
      // fontFamily: 'Poppins',
      // fontWeight: '700',
    },
    text3: {
      marginTop: '15px',
      fontSize: '16px',
      fontWeight: '500',
    },
    text4: {
      marginTop: '15px',
      fontSize: '16px',
      fontWeight: '500',
    },
    text5: {
      marginTop: '12px',
      fontSize: '14px',
      opacity: 0.8,
    },
  });
  return (
    <View>
      <Text style={styles.text}>Quantigo AI</Text>
      <Text style={styles.text2}>Certificate of Completion</Text>
      <Text style={styles.text3}>Congratulations, {certificate?.certificateData?.name}</Text>
      <Text style={styles.text4}>{certificate?.certificateData?.courseName}</Text>
      <Text style={styles.text5}>Course completed on {certificate?.certificateData?.completionDate}</Text>
    </View>
  );
};

export default CertificateText;
