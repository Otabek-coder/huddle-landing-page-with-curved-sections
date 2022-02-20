import React from "react";
import SectionOne from "./modules/sections/SectionOne.js";
import styled from "styled-components";
import SectionTwo from "./modules/sections/SectionTwo";
import SectionThird from "./modules/sections/SectionThird.js";
const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export default function Main() {
  return (
    <MainBody>
      <SectionOne
        title="Grow Together"
        subtitle="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form. "
        image="/images/illustration-grow-together.svg"

      />
      <SectionTwo
        title="Flowing Conversations"
        subtitle="  You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
  just-in-time loading for a more natural flow."
        image="/images/illustration-flowing-conversation.svg"
      />
      <SectionThird
        title="  Your Users"
        subtitle="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
         once signed in to your app, your users can start chatting immediately."
        image="/images/illustration-your-users.svg"

      />
    </MainBody>
  );
}
