/**
 * ==========================================
 * Component : BatchHeader
 * Project : ClassPilot
 * ==========================================
 */

import { FaPlus } from "react-icons/fa";

import "./BatchHeader.css";

function BatchHeader({

    onAddBatch,

}) {

    return (

        <div className="batch-header">

            <div className="batch-header-left">

                <h1>

                    Batches

                </h1>

                <p>

                    Manage all institute batches.

                </p>

            </div>

            <button

                className="batch-add-btn"

                onClick={onAddBatch}

            >

                <FaPlus />

                <span>

                    Add Batch

                </span>

            </button>

        </div>

    );

}

export default BatchHeader;