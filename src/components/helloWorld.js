import React from "react";
import styled from "styled-components";

const HelloWorld = () => {
  return <StyledDiv>styled-components</StyledDiv>;
};

const StyledDiv = styled.div`
  margin: 4em;
  color: yellow;
  background: green;
`;
export default HelloWorld;
