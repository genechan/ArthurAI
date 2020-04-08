import React from "react";

const Person = ({ name, mother, father, gender, spouse }) => {
  return (
    <div>
      <div>Name:&nbsp;{name || ""}</div>
      <div>Mother:&nbsp;{mother || ""}</div>
      <div>Father:&nbsp;{father || ""}</div>
      <div>Gender:&nbsp;{gender || ""}</div>
      <div>spouse:&nbsp;{spouse || ""}</div>
    </div>
  );
};

export default Person;
