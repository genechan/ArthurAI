import React from "react";
import Person from "./person";
const List = ({ list = [], id }) => {
  return <ul id={id}>{makeList(list)}</ul>;
};
const makeList = (list) => {
  return list
    .filter((obj) => obj)
    .map((obj, index) => {
      return (
        <li key={index}>
          <Person {...obj} />
        </li>
      );
    });
};
export default List;
