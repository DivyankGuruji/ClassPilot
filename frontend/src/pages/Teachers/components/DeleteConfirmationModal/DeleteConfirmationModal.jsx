import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({
    isOpen,
    title = "Delete",
    message,
    onCancel,
    onConfirm,
}) {

    if (!isOpen) return null;

    return (
        <div className="delete-modal-overlay">

            <div className="delete-modal-box">

                <h2>{title}</h2>

                <div className="delete-icon">
                    🗑️
                </div>

                <p>{message}</p>

                <div className="delete-buttons">

                    <button
                        className="cancel-delete"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="confirm-delete"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default DeleteConfirmationModal;