import React from "react";
import styled from "styled-components";
const HeadTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 5em;
  margin-bottom: 5em;
  width: 100%;
  @media (max-width: 47em) {
    padding: 2em 2em;
    img {
      height: 20px;
    }
  }
  @media (max-width: 23em) {
    flex-direction: column;
    img {
      margin-bottom: 1em;
      height: 40px;
    }
  }
`;
const Button = styled.button`
  padding: 0.8em 3em;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 400;
  background-color: transparent;
  color: hsl(322, 100%, 66%);
  border: 1px solid hsl(322, 100%, 66%);
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: hsl(321, 100%, 78%);
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 47em) {
    font-size: 15px;
    padding: 0.5em 2em;
  }
  @media (max-width: 27em) {
    padding: 0.3em 1em;
  }
  @media (max-width: 23em) {
    padding: 1em 4em;

  }
`;
export default function Header() {
  return (
    <HeadTag>
      <img src="/images/logo.svg" alt="Logo" />
      <Button>Try It Free</Button>
    </HeadTag>
  );
}
