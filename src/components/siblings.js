import Search from "./searchInput";
import React from "react";
import styled from "styled-components";
import List from "./list";

const Siblings = ({ value, onChange, list }) => {
  return (
    <StyledDiv>
      <p>Search for all you brother and sisters</p>
      <Search label="Sibling" value={value} onChange={onChange} />
      <List list={list} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding: 1em;
  border: 1px solid black;
  margin-bottom: 1em;
`;
export default Siblings;
