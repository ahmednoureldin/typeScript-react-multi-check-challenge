import { useState } from "react";
import { optionsArray } from "./components/checkbox/optionsArray";
import Checkbox from "./components/checkbox/Checkbox";
import styles from "./App.module.css";

const App = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [options, setOptions] = useState(optionsArray);

  return (
    <div className={styles.multiCheck}>
      <h2>my-multi-check</h2>
      <Checkbox checked={false} onChange={() => {}} label="Select All" />
    </div>
  );
};

export default App;
