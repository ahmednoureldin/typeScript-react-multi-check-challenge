interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  const handleCheckboxChange = () => {
    onChange();
  };

  return (
    <div>
      <input
        id={label.replace(/\s/g, "")}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={label.replace(/\s/g, "")}>{label}</label>
    </div>
  );
};

export default Checkbox;
