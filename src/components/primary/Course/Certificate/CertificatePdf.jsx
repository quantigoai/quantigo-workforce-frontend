import { PDFViewer } from '@react-pdf/renderer';
import React, { useEffect } from 'react';
import Certificate from './Certificate';
import { useSelector } from 'react-redux';

const CertificatePdf = () => {
  const { certificate } = useSelector((state) => state.course);

  return (
    <PDFViewer width="100%" height="922px">
      <Certificate certificate={certificate} />
    </PDFViewer>
  );
};

export default CertificatePdf;
