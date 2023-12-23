interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onChange();
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label onClick={handleCheckboxChange}>{label}</label>
    </div>
  );
};

export default Checkbox;
