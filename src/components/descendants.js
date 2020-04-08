import React from "react";
import Search from "./searchInput";
import List from "./list";
import styled from "styled-components";

const Descendants = ({ value, onChange, list = [] }) => {
  return (
    <StyledDiv>
      <p>Find all you children and grandchildren</p>
      <Search label="Descendant" value={value} onChange={onChange} />
      {list.length > 0 && <div>Count: &nbsp;{list.length}</div>}
      <List list={list} />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  padding: 1em;
  border: 1px solid black;
  margin-bottom: 1em;
`;
export default Descendants;
