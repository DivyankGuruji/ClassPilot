import Modal from "../Modal/Modal";

import Button from "../Button/Button";

import "./ConfirmDialog.css";

function ConfirmDialog({

    isOpen,

    onClose,

    onConfirm,

    title = "Confirmation",

    message = "Are you sure?",

    confirmText = "Delete",

    cancelText = "Cancel",

}) {

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            size="sm"

            title={title}

        >

            <div className="confirm-dialog">

                <p>

                    {message}

                </p>

                <div className="confirm-buttons">

                    <Button

                        text={cancelText}

                        variant="outline"

                        onClick={onClose}

                    />

                    <Button

                        text={confirmText}

                        variant="danger"

                        onClick={onConfirm}

                    />

                </div>

            </div>

        </Modal>

    );

}

export default ConfirmDialog;