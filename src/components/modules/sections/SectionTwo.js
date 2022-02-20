import React from "react";
import styled from "styled-components";
const MidMain = styled.div`
  display: flex;
  width: 100%;
  padding: 0 8em;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 65em) {
    padding: 0em 5em;
  }
  @media (max-width: 47em) {
    flex-direction: column;
    text-align: center;
   
  }
`;
const ContainerImg = styled.div`
  width: 45%;
  @media (max-width: 47em) {
    width: 100%;
    margin-bottom:5em;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const TextContainer = styled.div`
  width: 45%;
  @media (max-width: 47em) {
    width: 100%;
    margin-bottom:5em;
  }
  h1 {
    font-family: "Poppins", sans-serif;
    font-family: 700;
    margin-bottom: 0.5em;
  }
  p {
    line-height: 1.4;
  }
`;
export default function SectionTwo({ title, subtitle, image }) {
  return (
    <MidMain>
      <ContainerImg>
        <Image src={image} alt="section-img" />
      </ContainerImg>
      <TextContainer>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </TextContainer>
    </MidMain>
  );
}
