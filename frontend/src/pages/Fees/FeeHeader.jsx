/**
 * ==========================================
 * Component : FeeHeader
 * Project : ClassPilot
 * ==========================================
 */

import { FaPlus } from "react-icons/fa";

import "./FeeHeader.css";

function FeeHeader({

    onAddFee,

}) {

    return (

        <div className="fee-header">

            <div className="fee-header-left">

                <h1>

                    Fees

                </h1>

                <p>

                    Manage student fee records and payments.

                </p>

            </div>

            <button

                className="fee-add-btn"

                onClick={onAddFee}

            >

                <FaPlus />

                <span>

                    Add Fee

                </span>

            </button>

        </div>

    );

}

export default FeeHeader;