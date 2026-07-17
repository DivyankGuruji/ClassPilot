/**
 * ==========================================
 * Repository : Batch Repository
 * Project : ClassPilot
 * ==========================================
 */

import batchData from "../data/batchData";

let batches = [...batchData];

const delay = (ms = 300) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllBatches() {

    await delay();

    return [...batches];

}

export async function getBatchById(id) {

    await delay();

    return batches.find((batch) => batch.id === id);

}

export async function addBatch(batch) {

    await delay();

    const newBatch = {

        ...batch,

        id: Date.now(),

    };

    batches.push(newBatch);

    return newBatch;

}

export async function updateBatch(updatedBatch) {

    await delay();

    batches = batches.map((batch) =>

        batch.id === updatedBatch.id
            ? updatedBatch
            : batch

    );

    return updatedBatch;

}

export async function deleteBatch(id) {

    await delay();

    batches = batches.filter(

        (batch) => batch.id !== id

    );

    return true;

}