import React from "react";
import Styled from "styled-components";
import Res from "../assets/badrkhouzima01.2023.pdf";

const ObjectContainer = Styled.body` 
     overflow-y: hidden; 
     overflow:hidden;
     .object__Pdf{
      zoom="100";
      overflow:hidden
      width: 100vw;
      height: 100vh;
      display: flex;
    }
`;

function Resume() {
  return (
    <ObjectContainer>
      <iframe
        className="object__Pdf"
        width="100%"
        src={Res}
        title="badr khouzima resume"
        fileExtension=".pdf"
        mimeType="application/pdf"
      ></iframe>
    </ObjectContainer>
  );
}

export default Resume;
