/**
 * ==========================================
 * Repository : Fee Repository
 * Project : ClassPilot
 * ==========================================
 */

import feeData from "../data/feeData";

let fees = [...feeData];

const delay = (ms = 300) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllFees() {

    await delay();

    return [...fees];

}

export async function getFeeById(id) {

    await delay();

    return fees.find(

        (fee) => fee.id === id

    );

}

export async function addFee(fee) {

    await delay();

    const newFee = {

        ...fee,

        id: Date.now(),

    };

    fees.push(newFee);

    return newFee;

}

export async function updateFee(updatedFee) {

    await delay();

    fees = fees.map((fee) =>

        fee.id === updatedFee.id

            ? updatedFee

            : fee

    );

    return updatedFee;

}

export async function deleteFee(id) {

    await delay();

    fees = fees.filter(

        (fee) => fee.id !== id

    );

    return true;

}