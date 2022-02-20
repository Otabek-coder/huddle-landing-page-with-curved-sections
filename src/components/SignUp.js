import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 50vh;
  @media (max-width: 65em) {
    min-height: 20vh;
  }
`;

const SecTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 1em;
  font-family: "Poppins", sans-serif;
  font-family: 700;
`;

const SecButton = styled.button`
  padding: 1.5em 5em;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  display: block;
  cursor: pointer;
  border: 0;
  background-color: hsl(322, 100%, 66%);
  transition: 0.3s ease-in-out;
  color: #fff;

  &:hover {
    background-color: hsl(321, 100%, 78%);
  }
`;
export default function SignUp() {
  return (
    <Section>
      <SecTitle>Ready To Build Your Community?</SecTitle>
      <SecButton>Get Started For Free</SecButton>
    </Section>
  );
}
