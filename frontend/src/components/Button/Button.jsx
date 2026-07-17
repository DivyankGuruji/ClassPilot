/**
 * ==========================================
 * Component : Button
 * Project   : ClassPilot
 * Version   : 2.0.0
 * ==========================================
 */

import "./Button.css";

function Button({

    text = "Button",

    type = "button",

    variant = "primary",

    size = "md",

    fullWidth = false,

    disabled = false,

    loading = false,

    leftIcon = null,

    rightIcon = null,

    onClick,

}) {

    return (

        <button

            type={type}

            className={`
                btn
                btn-${variant}
                btn-${size}
                ${fullWidth ? "btn-full" : ""}
            `}

            disabled={disabled || loading}

            onClick={onClick}

        >

            {

                loading ? (

                    <span className="btn-loader"></span>

                ) : (

                    <>

                        {

                            leftIcon &&

                            <span className="btn-icon">

                                {leftIcon}

                            </span>

                        }

                        <span>

                            {text}

                        </span>

                        {

                            rightIcon &&

                            <span className="btn-icon">

                                {rightIcon}

                            </span>

                        }

                    </>

                )

            }

        </button>

    );

}

export default Button;