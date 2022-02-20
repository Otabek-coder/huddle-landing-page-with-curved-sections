import React from "react";
import styled from "styled-components";
const Main = styled.div`
  width: 100%;
  margin: 1em 0em;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 49em) {
      min-height: 30vh;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: hsl(207, 100%, 98%);
  align-items: center;
  padding: 0 8em;
  height: 100%;
  width: 100%;
  h1 {
    font-family: "Poppins", sans-serif;
    font-family: 700;
    margin-bottom: 0.5em;
  }
  p {
    line-height: 1.4;
  }
  @media (max-width: 65em) {
    padding: 0em 5em;

  }
  @media (max-width: 47em) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0em 2em;

  }
`;
const ImgWrapper = styled.div`
  width: 45%;
  @media (max-width: 47em) {
    width: 100%;
    margin-bottom: 5em;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const TextWrapper = styled.div`
  width: 45%;
  @media (max-width: 47em) {
    width: 100%;
    margin-bottom: 5em;
  }
`;
const BgTop = styled.div`
  background-image: url("/images/bg-section-top-desktop-2.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 200px;

  @media (max-width: 65em) {
    background-size: 100% 50%;
    background-position: bottom;
  }
  @media (max-width: 47em) {
    background-image: url("/images/bg-section-top-mobile-2.svg");
  }
`;
const BgBottom = styled.div`
  background-image: url("/images/bg-section-bottom-desktop-2.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 200px;

  @media (max-width: 65em) {
    background-size: 100% 50%;
    background-position: top;
  }
  @media (max-width: 47em) {
    background-image: url("/images/bg-section-bottom-mobile-2.svg");
  }
`;
export default function SectionThird({ title, subtitle, image }) {
  return (
    <Main>
      <BgTop>{/* <img src={bgTop} alt="bg-top" /> */}</BgTop>
      <Container>
        <TextWrapper>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </TextWrapper>
        <ImgWrapper>
          <Image src={image} alt="section-img" />
        </ImgWrapper>
      </Container>
      <BgBottom>{/* <img src={bgBottom} alt="bg-bottom" /> */}</BgBottom>
    </Main>
  );
}
