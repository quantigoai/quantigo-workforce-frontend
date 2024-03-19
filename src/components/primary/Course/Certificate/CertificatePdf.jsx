import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Certificate from './Certificate';

const CertificatePdf = () => {
  return (
    <PDFViewer width="100%" height="922px">
      <Certificate />
    </PDFViewer>
  );
};

export default CertificatePdf;
