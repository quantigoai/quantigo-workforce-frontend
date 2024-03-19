import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const CertificateDescription = () => {
  const styles = StyleSheet.create({
    description: {
      marginTop: '20px',
      fontSize: '14px',
      opacity: 0.7,
    },
    description2: {
      fontSize: '14px',
      opacity: 0.7,
    },
  });
  return (
    <View>
      <Text style={styles.description}>By continuing to learn, you have expanded your </Text>
      <Text style={styles.description2}>perspective, sharpened your skill and made yourself</Text>
      <Text style={styles.description2}>even more in demand</Text>
    </View>
  );
};

export default CertificateDescription;
