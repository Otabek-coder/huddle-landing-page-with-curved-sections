import React from "react";
import styled from "styled-components";

const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin: 0 auto; */
  padding: 0 5em;
  h1 {
    font-size: 4rem;
    font-weight: 700;
  }
  p {
    font-weight: 400;
    color: grey;
  }
  @media (max-width: 47em) {
    flex-direction: column;
   
  }
`;
const User = styled.div`
  @media (max-width: 47em) {
    margin-bottom: 8em;
  }
`;
const Message = styled.div`
  @media (max-width: 47em) {
    margin-left: 3em;
  }
`;
export default function UserInfo() {
  return (
    <WrapperInfo>
      <User>
        <img src="/images/icon-communities.svg " alt="community-icon" />
        <h1>1.4k</h1>
        <p>Communities Formed</p>
      </User>
      <Message>
        <img src="/images/icon-messages.svg" alt="message-icon" />
        <h1>2.7m+</h1>
        <p>Messages Sent</p>
      </Message>
    </WrapperInfo>
  );
}
