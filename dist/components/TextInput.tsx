import React from "react";
import "./TextInput.css";

interface ITextInput {
  type?: string;
  label: string;
  placeholder: string;
  value?: string;
  helpText: string;
}

const TextInput: React.FC<ITextInput> = (props: ITextInput) => {
  return (
    <div className="simple-form-group">
      {props.label && (
        <label className="simple-text-label">{props.label}</label>
      )}
      <input
        type={props.type}
        className="simple-text-input"
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.helpText && (
        <small className="simple-form-text">{props.helpText}</small>
      )}
    </div>
  );
};
export default TextInput;
