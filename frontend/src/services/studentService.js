/**
 * ==========================================
 * Student Service
 * Project : ClassPilot
 * ==========================================
 */

import studentRepository from "../repositories/studentRepository";

const studentService = {

    getStudents() {

        return studentRepository.getAll();

    },

    getStudent(id) {

        return studentRepository.getById(id);

    },

    addStudent(student) {

        return studentRepository.create(student);

    },

    updateStudent(student) {

        return studentRepository.update(student);

    },

    deleteStudent(id) {

        return studentRepository.remove(id);

    }

};

export default studentService;