"use client";
import React from "react";
import Certificate from "./Certificate";
import certificates from "./certificatesData";

const CertificatesTab = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <Certificate key={index} ImgSertif={cert.image} />
      ))}
    </div>
  );
};

export default CertificatesTab;
