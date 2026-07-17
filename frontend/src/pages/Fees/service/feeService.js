/**
 * ==========================================
 * Service : Fee Service
 * Project : ClassPilot
 * ==========================================
 */

import {

    getAllFees,
    getFeeById,
    addFee,
    updateFee,
    deleteFee,

} from "../repository/feeRepository";

export async function fetchFees() {

    return await getAllFees();

}

export async function fetchFeeById(id) {

    return await getFeeById(id);

}

export async function createFee(fee) {

    return await addFee(fee);

}

export async function editFee(fee) {

    return await updateFee(fee);

}

export async function removeFee(id) {

    return await deleteFee(id);

}