import React, { useState } from "react";
import { MdFacebook } from "react-icons/md";
import { IconContext } from "react-icons";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";
const FooterEl = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  background-color: hsl(192, 100%, 9%);
  padding: 0em 4em 3em 4em;
  font-size: 13px;
  @media (max-width: 49em) {
    padding: 0em 2em 2em 3em;
  }
  @media (max-width: 47em) {
    flex-direction: column-reverse;
  }
`;

const CnsContainer = styled.div`
  display: flex;
  list-style: none;
  li {
    margin-right: 0.6em;

    transition: all 0.3s ease-in;
  }
  li * :hover {
    color: #00b4d8;
    cursor: pointer;
  }
`;

const ContactContainer = styled.div`
  margin-top: -30px;
  text-align: left;
  color: #fff;
  width: 30%;
  .logo-huddle {
    margin-left: -10px;
  }
  p {
    line-height: 1.4;
    margin: 0.5em 0em 1.5em 0em;
    width: 25vw;
  }
  .tel-container {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
  }
  .tel-container p {
    margin: auto 1em;
  }
  .email-container {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }
  .email-container p {
    margin: auto 1em;
  }
  @media (max-width: 47em) {
    width: 100%;
    p {
      width: 100%;
    }
  }
`;
const SubscribeContainer = styled.div`
  color: #fff;
  width: 50%;

  h1 {
    margin: 0.5em 0;
  }
  p{
    margin-bottom: 2em;
    max-width: 25vw;
    line-height: 1.4;
  }
  input {
    border-radius: 5px;
    padding: 1em 3em;
    margin-right: 3em;
    width: 50%;
  }

  button {
    border-radius: 5px;
    padding: 1em 3em;
    color: #fff;
    background-color: hsl(322, 100%, 66%);
    border: 0;
    transition: all 0.2s ease-in;
  }

  .error-state {
    margin: 1em 0em;
    color: red;
    letter-spacing: 1.2px;
    font-weight: 700;
    max-width: 100vw;
  }
  .success-state {
    margin: 1em 0em;
    color: green;
    letter-spacing: 1.3px;
    max-width: 100vw;

  }
  button:hover {
    cursor: pointer;
    background-color: hsl(321, 100%, 78%);
  }
  @media (max-width: 55em) {
    input {
      width: 50%;
    }
    button {
      padding: 1em 2em;
    }
  }
  @media (max-width: 47em) {
    width: 100%;
    p {
      max-width: 100%;
    }
    input {
      width: 100%;
      margin-bottom: 1em;
    }
    button {
      width: 50%;
      display: block;
      margin: 0 0 8em auto;
    }
    form{
      width: 100%;


    }

    .success-state{
      margin: -7em 0em 3em 0em ;

      
    }
    .error-state{
      margin: -7em 0em 3em 0em ;

    }
  }
`;

const BgTop = styled.div`
  background-image: url("/images/bg-footer-top-desktop.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 200px;
  margin-bottom: -10px;

  @media (max-width: 65em) {
    background-size: 100% 50%;
    background-position: bottom;
    margin-bottom: -6px;
  }
  @media (max-width: 47em) {
    background-image: url("/images/bg-footer-top-mobile.svg");
    margin-bottom: -5px;
  }
`;
export default function Footer() {
  /* eslint-disable no-useless-escape */
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (emailRegex.test(email)) {
      setState("success");
      // error
    } else {
      // alert("Invalid email");
      setState("error");
    }
  }
  return (
    <IconContext.Provider value={{ color: "#fff", size: "3em" }}>
      <BgTop></BgTop>
      <FooterEl>
        <ContactContainer>
          <img
            src="/images/logob.svg"
            alt="footer-huddle-logo"
            className="logo-huddle"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="tel-container">
            <img src="/images/icon-phone.svg" alt="tel-logo" />
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="email-container">
            <img src="/images/icon-email.svg" alt="email-logo" />
            <p>example@huddle.com</p>
          </div>
          <CnsContainer>
            <li>
              <MdFacebook />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
          </CnsContainer>
        </ContactContainer>
        <SubscribeContainer>
          <h1>NEWSLETTER</h1>
          <p className="newsletter">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We???ll never send you spam or pass on your email address
          </p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email Address"
              value={email}
              type="text"
              onChange={handleEmail}
            />
              <button>Subscribe</button>
            <div className="state-container">
              {state === "success" && (
                <p className="success-state">
                  Email sign up has been successful
                </p>
              )}
              {state === "error" && (
                <p className="error-state">
                  Please provide a valid email address!{" "}
                </p>
              )}
            </div>
          </form>
        </SubscribeContainer>
      </FooterEl>
    </IconContext.Provider>
  );
}
