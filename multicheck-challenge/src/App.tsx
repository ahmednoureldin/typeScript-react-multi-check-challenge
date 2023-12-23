import { useState } from "react";
import Checkbox from "./components/checkbox/Checkbox";
import { optionsArray } from "./components/checkbox/optionsArray";
import styles from "./App.module.css";

const App = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [options, setOptions] = useState(optionsArray);

  const handleSelectAllChange = () => {
    const newOptions = options.map((option) => ({
      ...option,
      checked: !selectAll,
    }));
    setOptions(newOptions);
    setSelectAll(!selectAll);
  };

  const handleOptionChange = (index: number) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);

    const allChecked = newOptions.every((option) => option.checked);

    setSelectAll(allChecked);
  };

  return (
    <div className={styles.multicheckOptions}>
      <Checkbox
        checked={selectAll}
        onChange={handleSelectAllChange}
        label="Select All"
      />
      {options.map((option, index) => (
        <Checkbox
          key={index}
          checked={option.checked}
          onChange={() => handleOptionChange(index)}
          label={option.label}
        />
      ))}
    </div>
  );
};

export default App;
