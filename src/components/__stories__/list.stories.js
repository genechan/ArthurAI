import React from "react";
import List from "../list";
export default { title: "List" };
export const ListTest = () => (
  <List
    list={[
      {
        name: "Nicky",
        mother: "Julee",
        father: "Barret",
        gender: "male",
        spouse: "Vanni",
      },
      {
        name: "Kimberli",
        mother: "Julissa",
        father: "Aditya",
        gender: "female",
      },
      {
        name: "Abigael",
        mother: "Julissa",
        father: "Aditya",
        gender: "female",
      },
    ]}
  />
);
