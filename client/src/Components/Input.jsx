const Input = ({ type, name, placeholder, icon, value, onChange, required }) => {
  return (
    <div className="input-group">
      <div className="input-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <div className="input-border"></div>
    </div>
  );
};

export default Input;