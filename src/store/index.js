import Vuex from 'vuex';
import Vue from 'vue';
import gradebooksService from '../services/gradebook';
import HTTP from '../services/base';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        gradebooks: [],
        gradebook: {},
        teachers: [],
        teacher: {},
        user: {}
    },
    mutations: {
        SET_GRADEBOOKS(state, gradebooks) {
            state.gradebooks = gradebooks;
        },
        SET_SINGLE_GRADEBOOK(state, gradebook) {
            state.gradebook = gradebook;
        },
        SET_TEACHERS(state, teachers) {
            state.teachers = teachers;
        },
        SET_SINGLE_TEACHER(state, teacher) {
            state.teacher = teacher;
        },
        CREATE_GRADEBOOK(state, newGradebook) {
            state.gradebooks.push(newGradebook);
        },
        CREATE_STUDENT(state, newStudent) {
            const department = state.gradebooks.filter(gradebook => 
                gradebook.id == newStudent.gradebook_id);
            department[0].student.push(newStudent);
        },
        CREATE_TEACHER(state, newTeacher) {
            state.teachers.push(newTeacher);
        },
        DELETE_GRADEBOOK(state, id) {
            state.gradebooks.splice(state.gradebooks.findIndex(gradebook => gradebook.id === id), 1);   
        },
        SET_USER_DATA(state, resp) {
            state.user = resp.user;
            localStorage.setItem('token', resp.token);
            HTTP.defaults.headers.Authorization = `Bearer ${resp.token}`;
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('token');
            location.reload();
        }
    },
    actions: {
        async getGradebooks({commit}) {
            const gradebooks = await gradebooksService.getGradebooks();
            console.log(gradebooks);
            commit('SET_GRADEBOOKS', gradebooks);
        },
        async getSingleGradebook({commit}, id) {
            const gradebook = await gradebooksService.getSingleGradebook(id);
            commit('SET_SINGLE_GRADEBOOK', gradebook);
        },
        async getTeachers({commit}) {
            const teachers = await gradebooksService.getTeachers();
            commit('SET_TEACHERS', teachers);
        },
        async getSingleTeacher({commit}, id) {
            const teacher = await gradebooksService.getSingleTeacher(id);
            console.log(teacher);
            commit('SET_SINGLE_TEACHER', teacher);
        },
        async createGradebook({commit}, newGradebook) {
            await gradebooksService.createGradebook(newGradebook);
            commit('CREATE_GRADEBOOK', newGradebook);
        },
        async createStudent({commit}, newStudent) {
            console.log(newStudent);
            gradebooksService.createStudent(newStudent);
            console.log(newStudent, 'drugi put');
            commit('CREATE_STUDENT', newStudent);
        },
        async createTeacher({commit}, newTeacher) {
            gradebooksService.createTeacher(newTeacher);
            console.log(newTeacher, 'jedini put');
            commit('CREATE_TEACHER', newTeacher);
        },
        async deleteGradebook({commit}, id) {
            console.log("usao u akciju");
            const gradebook = await gradebooksService.deleteGradebook(id);
            console.log(gradebook);
            commit('DELETE_GRADEBOOK', id);
        },
        async registerAction({commit}, credentials) {
            const resp = await gradebooksService.register(credentials);
            console.log(resp);
            commit('SET_USER_DATA', resp);
        },
        async loginAction({commit}, credentials) {
            const resp = await gradebooksService.login(credentials);
            console.log(resp);
            commit('SET_USER_DATA', resp);
        },
        logoutAction({commit}) {
            commit('CLEAR_USER_DATA');
        }


    },
    getters: {
        gradebooks: state => state.gradebooks,
        gradebook: state => state.gradebook,
        teachers: state => state.teachers,
        teacher: state => state.teacher,
        availableTeachers: state => {
            const teachers = state.teachers;
            const gradebooks = state.gradebooks;
            const occupied = [];
            gradebooks.forEach(gradebook => {
                occupied.push(gradebook.teacher_id);
            }
            );
            return teachers.filter(teacher => occupied.indexOf(teacher.id) === -1);
        },
        availableGradebooks: state => {
            const gradebooks = state.gradebooks;
            return gradebooks.filter(gradebook => gradebook.teacher_id == null)
        },
        isAuthenticated: () => {
            return !!localStorage.getItem('token');
        }
    }
})