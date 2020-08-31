import React from "react";

const Input = ({ type, name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className="form-control"
      />
      {/* Show error if there is an error */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
