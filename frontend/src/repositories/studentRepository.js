/**
 * ==========================================
 * Student Repository
 * Project : ClassPilot
 * ==========================================
 */

import mockStudents from "../mock/students";

let students = [...mockStudents];

const delay = (ms = 300) =>
    new Promise((resolve) => setTimeout(resolve, ms));

const studentRepository = {

    async getAll() {

        await delay();

        return [...students];

    },

    async getById(id) {

        await delay();

        return students.find(
            (student) => student.id === id
        );

    },

    async create(student) {

        await delay();

        const newStudent = {

            ...student,

            id: Date.now(),

        };

        students.push(newStudent);

        return newStudent;

    },

    async update(updatedStudent) {

        await delay();

        students = students.map((student) =>

            student.id === updatedStudent.id

                ? updatedStudent

                : student

        );

        return updatedStudent;

    },

    async remove(id) {

        await delay();

        students = students.filter(

            (student) => student.id !== id

        );

        return true;

    }

};

export default studentRepository;