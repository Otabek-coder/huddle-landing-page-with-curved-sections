import React from "react";
import styled from "styled-components";
const Intro = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  @media (max-width: 23em) {
    word-break: break-all;
    padding: 0 1em;
  }
`;
const TextWrapper = styled.div`
  font-size: 0.9rem;
  max-width: 400px;
  margin: 2em auto;
  p {
    font-size: 1rem;
    font-weight: 400;
  }
  @media (max-width: 29em) {
    padding: 0em 2em;
    max-width: 100%;
  }
`;

const Button = styled.button`
  padding: 1em 3em;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  border: 0;
  background-color: hsl(322, 100%, 66%);
  transition: 0.3s ease-in-out;
  color: #fff;

  &:hover {
    background-color: hsl(321, 100%, 78%);
  }
`;
export default function IntroText() {
  return (
    <Intro>
      <Title>Build The Community Your Fans Will Love</Title>
      <TextWrapper>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with you users as you engage
          in genuine discussion
        </p>
      </TextWrapper>
      <Button>Get Started For Free</Button>
    </Intro>
  );
}
