import React from "react";
import Actions from "./redux/actions";
import { Sibling, Descendants } from "./components";

import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: Actions.LOAD_DATA });
  }, []);
  // for siblings
  const siblings = useSelector((store) => store.siblings);
  const siblingNameSearch = useSelector((store) => store.siblingNameSearch);
  const siblingOnChange = (e) => {
    dispatch({
      type: Actions.SIBLING_NAME_SEARCH,
      payload: e.target.value.trim(),
    });
  };
  // for descendants
  const descendants = useSelector((store) => store.descendants);
  const descendantNameSearch = useSelector(
    (store) => store.descendantNameSearch
  );
  const descendantOnChange = (e) => {
    dispatch({
      type: Actions.DESCENDANT_INPUT,
      payload: e.target.value.trim(),
    });
  };
  return (
    <div>
      <Sibling
        value={siblingNameSearch}
        onChange={siblingOnChange}
        list={siblings}
      />
      <Descendants
        value={descendantNameSearch}
        onChange={descendantOnChange}
        list={descendants}
      />
    </div>
  );
};
export default App;
