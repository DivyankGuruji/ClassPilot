/**
 * ==========================================
 * Component : Select
 * Project   : ClassPilot
 * Version   : 1.0.0
 * ==========================================
 */

import "./Select.css";

function Select({

    label = "",

    name = "",

    value = "",

    options = [],

    onChange,

    required = false,

    disabled = false,

    error = "",

}) {

    return (

        <div className="select-group">

            {

                label && (

                    <label className="select-label">

                        {label}

                        {

                            required &&

                            <span className="required">*</span>

                        }

                    </label>

                )

            }

            <select

                className={`custom-select ${error ? "select-error" : ""}`}

                name={name}

                value={value}

                onChange={onChange}

                required={required}

                disabled={disabled}

            >

                <option value="">

                    Select {label}

                </option>

                {

                    options.map((option) => (

                        <option

                            key={option.value}

                            value={option.value}

                        >

                            {option.label}

                        </option>

                    ))

                }

            </select>

            {

                error && (

                    <small className="select-error-text">

                        {error}

                    </small>

                )

            }

        </div>

    );

}

export default Select;