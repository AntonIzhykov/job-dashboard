import React from "react";
import "./Input.scss";
import ErrorMessage from "../../ErrorMessage";

const Input = ({
  error,
  className,
  name,
  icon,
  value,
  onChange,
  onBlur,
  label,
  labelSmall,
  labelExtraSmall,
  type,
  placeholder,
  horizontal,
  disabled,
  ...props
}) => (
  <div
    className={`input-wrapper position-relative ${className ? className : ""} ${
      horizontal ? "form-group--horizontal" : ""
    }`}
  >
    {label && (
      <label className="form-label" htmlFor={name}>
        {label}
        {labelSmall && <small>{labelSmall}</small>}
        {labelExtraSmall && <small className="extra">{labelExtraSmall}</small>}
      </label>
    )}

    {icon && <div className="input-icon left">{icon}</div>}

    <input
      id={name}
      type={!type ? "text" : type}
      className={`form-field ${error ? "error" : ""}`}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled || false}
      {...props}
    />

    {error && <ErrorMessage error={error} />}
  </div>
);

export default Input;
