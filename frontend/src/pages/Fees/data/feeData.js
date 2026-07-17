/**
 * ==========================================
 * Mock Data : Fees
 * Project : ClassPilot
 * ==========================================
 */

const feeData = [

    {
        id: 1,
        receiptNo: "RCPT001",
        studentName: "Rahul Sharma",
        rollNo: "CSE001",
        course: "B.Tech",
        semester: "5",
        amount: 50000,
        paid: 50000,
        due: 0,
        paymentMode: "UPI",
        paymentDate: "2026-07-01",
        status: "Paid",
    },

    {
        id: 2,
        receiptNo: "RCPT002",
        studentName: "Priya Singh",
        rollNo: "CSE002",
        course: "B.Tech",
        semester: "5",
        amount: 50000,
        paid: 30000,
        due: 20000,
        paymentMode: "Cash",
        paymentDate: "2026-07-02",
        status: "Partial",
    },

    {
        id: 3,
        receiptNo: "RCPT003",
        studentName: "Aman Verma",
        rollNo: "BCA021",
        course: "BCA",
        semester: "3",
        amount: 35000,
        paid: 0,
        due: 35000,
        paymentMode: "-",
        paymentDate: "-",
        status: "Pending",
    },

    {
        id: 4,
        receiptNo: "RCPT004",
        studentName: "Neha Gupta",
        rollNo: "MCA011",
        course: "MCA",
        semester: "1",
        amount: 45000,
        paid: 45000,
        due: 0,
        paymentMode: "Card",
        paymentDate: "2026-07-03",
        status: "Paid",
    },

    {
        id: 5,
        receiptNo: "RCPT005",
        studentName: "Vikas Mishra",
        rollNo: "BCOM012",
        course: "B.Com",
        semester: "2",
        amount: 30000,
        paid: 10000,
        due: 20000,
        paymentMode: "Net Banking",
        paymentDate: "2026-07-04",
        status: "Partial",
    }

];

export default feeData;