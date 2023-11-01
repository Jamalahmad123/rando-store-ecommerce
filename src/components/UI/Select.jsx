const Select = ({ children, name, label, firstOption }) => {
  return (
    <div className="space-y-1 w-full">
      <label htmlFor={name} className="text-gray-900 font-medium">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="text-gray-900 box-border w-full border focus-within:outline-none rounded-md transition-colors p-[10px] border-gray-200"
      >
        <option value="">{firstOption}</option>
        {children}
      </select>
    </div>
  );
};

// Select.Option = function SelectOption({ value, label }) {
//   return <option value={value}>{label}</option>;
// };

export default Select;
