import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function File(props) {
  const {
    name,
    accept,
    onChange,
    prepend,
    append,
    placeholder,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);
  const [FileName, setFileName] = useState("");
  const [hasError, setHasError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const onChangeFile = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile.name);

    if (!types.includes(selectedFile.type)) {
      setHasError("File type not supported");
    } else {
      setHasError(null);
      onChange({
        target: {
          name: event.target.name,
          value: event.target.files,
        },
      });
    }
  };

  const onClickBrowse = () => {
    refInputFile.current.click();
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          value={FileName}
          onChange={onChangeFile}
          placeholder={placeholder}
        />
        <input
          onClick={onClickBrowse}
          value={FileName}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
}

File.defaultProps = {
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
  append: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
