/**
 * File: Input.jsx
 * Version: 1.0.0
 * Project: ClassPilot
 */

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./Input.css";

function Input({
    label = "",
    type = "text",
    name = "",
    value = "",
    placeholder = "",
    onChange,
    onBlur,
    required = false,
    disabled = false,
    readOnly = false,
    error = "",
    helperText = "",
    leftIcon = null,
    rightIcon = null,
    autoComplete = "off",
}) {

    const [showPassword, setShowPassword] = useState(false);

    const inputType =
        type === "password"
            ? showPassword
                ? "text"
                : "password"
            : type;

    return (

        <div className="input-group">

            {
                label && (

                    <label className="input-label">

                        {label}

                        {
                            required &&

                            <span className="required">*</span>

                        }

                    </label>

                )
            }

            <div className={`input-wrapper ${error ? "error-border" : ""}`}>

                {
                    leftIcon &&

                    <span className="input-icon left-icon">

                        {leftIcon}

                    </span>

                }

                <input

                    className="custom-input"

                    type={inputType}

                    name={name}

                    value={value}

                    placeholder={placeholder}

                    onChange={onChange}

                    onBlur={onBlur}

                    required={required}

                    disabled={disabled}

                    readOnly={readOnly}

                    autoComplete={autoComplete}

                />

                {
                    type === "password" ? (

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >

                            {
                                showPassword
                                    ? <FaEyeSlash />
                                    : <FaEye />
                            }

                        </button>

                    ) : (

                        rightIcon &&

                        <span className="input-icon right-icon">

                            {rightIcon}

                        </span>

                    )
                }

            </div>

            {
                helperText && !error && (

                    <small className="helper-text">

                        {helperText}

                    </small>

                )
            }

            {
                error && (

                    <small className="error-text">

                        {error}

                    </small>

                )
            }

        </div>

    );

}

export default Input;