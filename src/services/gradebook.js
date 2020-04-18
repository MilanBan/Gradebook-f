import HTTP from './base';

class GradebooksService {
    async getGradebooks() {
        const response = await HTTP.get('/gradebooks');
        return response.data;
    }
    async getSingleGradebook(id) {
        const response = await HTTP.get(`/gradebooks/${id}`);
        return response.data;
    }
    async createGradebook(newGradebook) {
        const response = await HTTP.post('/gradebooks', newGradebook);
        return response.data;
    }
    async getTeachers() {
        const response = await HTTP.get('/teachers');
        return response.data;
    }
    async getSingleTeacher(id) {
        const response = await HTTP.get(`/teachers/${id}`);
        return response.data;
    }
    async createStudent(newStudent) {
        const response = await HTTP.post(`/gradebooks/${newStudent.gradebook_id}/students/create`, newStudent);
        return response.data;
    }
    async createTeacher(newTeacher) {
        const response = await HTTP.post('/teachers', newTeacher);
        return response.data;
    }
    async deleteGradebook(id) {
        const response = await HTTP.delete(`/gradebooks/${id}`);
        return response.data;
    }
    async register(credentials) {
        const response = await HTTP.post('/register', credentials);
        return response.data
    }
    async login(credentials) {
        const response = await HTTP.post('/login', credentials);
        return response.data
    }
}

const gradebooksService = new GradebooksService();

export default gradebooksService;
