/**
 * ==========================================
 * Service : Batch Service
 * Project : ClassPilot
 * ==========================================
 */

import {

    getAllBatches,
    getBatchById,
    addBatch,
    updateBatch,
    deleteBatch,

} from "../repository/batchRepository";

export async function fetchBatches() {

    return await getAllBatches();

}

export async function fetchBatchById(id) {

    return await getBatchById(id);

}

export async function createBatch(batch) {

    return await addBatch(batch);

}

export async function editBatch(batch) {

    return await updateBatch(batch);

}

export async function removeBatch(id) {

    return await deleteBatch(id);

}