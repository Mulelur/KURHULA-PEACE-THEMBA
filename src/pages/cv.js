import React, { useState } from "react";
import HeaderContainer from "../container/header";
import NavBarContainer from "../container/navBar";
import { Document, Page } from "react-pdf";
import pdf from "../assets/pdf/Shane_Thirkell_s_CV.pdf";
import FooterContainer from "../container/footer";

export default function CV() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <NavBarContainer />
      <HeaderContainer>CV</HeaderContainer>
      <div>
        <Document
          file="Shane_Thirkell_s_CV.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <FooterContainer />
    </>
  );
}
