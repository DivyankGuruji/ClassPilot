/**
 * ==========================================
 * Teacher Service
 * Project : ClassPilot
 * ==========================================
 */

import teacherRepository from "../repositories/teacherRepository";

const teacherService = {

    getTeachers() {

        return teacherRepository.getAll();

    },

    getTeacher(id) {

        return teacherRepository.getById(id);

    },

    addTeacher(teacher) {

        return teacherRepository.create(teacher);

    },

    updateTeacher(teacher) {

        return teacherRepository.update(teacher);

    },

    deleteTeacher(id) {

        return teacherRepository.remove(id);

    },

};

export default teacherService;