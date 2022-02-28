import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import IntroText from "./components/modules/IntroText";
import Illustration from "./components/modules/Illustration";
import UserInfo from "./components/modules/UserInfo";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Footer from "./components/Footer";
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-x:hidden;
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <IntroText />
      <Illustration />
      <UserInfo />
      <Main />
      <SignUp />
      <Footer />
    </Wrapper>
  );
}

export default App;
