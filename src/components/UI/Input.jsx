const Input = ({ type, name, label, isOptional, icon: Icon, ...rest }) => {
  return (
    <div className="space-y-1 w-full">
      <label htmlFor={name} className="block sm:font-medium">
        <span className="text-gray-900">{label}</span>
        {isOptional ? "" : <span className="text-red-500"> *</span>}
      </label>
      <div className="relative flex items-center rounded-md w-full">
        {Icon && (
          <span className="absolute left-3 top-[55%] transform -translate-y-1/2">
            <Icon className="w-4 h-4 text-gray-400" />
          </span>
        )}
        <input
          type={type}
          name={name}
          id={name}
          {...rest}
          className={`box-border text-gray-900 border focus-within:outline-none rounded-md p-3 transition-colors py-2 ${
            Icon ? "pl-8" : ""
          } w-full focus:outline-none focus:border-blue-500`}
        />
      </div>
    </div>
  );
};

export default Input;
