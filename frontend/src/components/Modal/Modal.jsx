/**
 * ==========================================
 * Component : Modal
 * Project   : ClassPilot
 * Version   : 1.0.0
 * ==========================================
 */

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import "./Modal.css";

function Modal({

    isOpen = false,

    title = "Modal",

    children,

    onClose,

    size = "md",

    closeOnOverlay = true,

    showCloseButton = true,

}) {

    useEffect(() => {

        const handleEscape = (event) => {

            if (event.key === "Escape") {

                onClose?.();

            }

        };

        if (isOpen) {

            document.addEventListener("keydown", handleEscape);

            document.body.style.overflow = "hidden";

        }

        return () => {

            document.removeEventListener("keydown", handleEscape);

            document.body.style.overflow = "auto";

        };

    }, [isOpen, onClose]);



    if (!isOpen) return null;



    const handleOverlayClick = () => {

        if (closeOnOverlay) {

            onClose?.();

        }

    };



    return (

        <div
            className="modal-overlay"
            onClick={handleOverlayClick}
        >

            <div
                className={`modal modal-${size}`}
                onClick={(event) => event.stopPropagation()}
            >

                <div className="modal-header">

                    <h2>{title}</h2>

                    {

                        showCloseButton && (

                            <button
                                className="modal-close-btn"
                                onClick={onClose}
                            >

                                <FaTimes />

                            </button>

                        )

                    }

                </div>

                <div className="modal-body">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default Modal;