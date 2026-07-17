/**
 * ==========================================
 * Teacher Repository
 * Project : ClassPilot
 * ==========================================
 */

import mockTeachers from "../mock/teachers";

let teachers = [...mockTeachers];

const delay = (ms = 300) =>
    new Promise((resolve) => setTimeout(resolve, ms));

const teacherRepository = {

    async getAll() {

        await delay();

        return [...teachers];

    },

    async getById(id) {

        await delay();

        return teachers.find(

            (teacher) => teacher.id === id

        );

    },

    async create(teacher) {

        await delay();

        const newTeacher = {

            ...teacher,

            id: Date.now(),

        };

        teachers.push(newTeacher);

        return newTeacher;

    },

    async update(updatedTeacher) {

        await delay();

        teachers = teachers.map((teacher) =>

            teacher.id === updatedTeacher.id

                ? updatedTeacher

                : teacher

        );

        return updatedTeacher;

    },

    async remove(id) {

        await delay();

        teachers = teachers.filter(

            (teacher) => teacher.id !== id

        );

        return true;

    },

};

export default teacherRepository;