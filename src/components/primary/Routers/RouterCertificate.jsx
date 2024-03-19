import React from 'react';
import Routers from './Routers';
import CertificatePdf from '../Course/Certificate/CertificatePdf';
import { Route, Routes } from 'react-router-dom';

const RouterCertificate = () => {
  return (
    <Routes>
      <Route path="/certificate" element={<CertificatePdf />} />
    </Routes>
  );
};

export default RouterCertificate;
