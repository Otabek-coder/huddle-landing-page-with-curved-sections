import React from "react";
import styled from "styled-components";
const ImageWrapper = styled.div`
  max-width: 60%;
  margin: 4em  auto;

`;
const Image = styled.img`
  width: 100%;
`;
export default function Illustration() {
  return (
    <ImageWrapper>
      <Image src="/images/screen-mockups.svg" alt="Illustration-img" />
    </ImageWrapper>
  );
}
