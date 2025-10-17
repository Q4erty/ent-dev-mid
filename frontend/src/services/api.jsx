import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const TaskAPI = {
    list: () => api.get("/tasks"),
    get: (id) => api.get(`/tasks/${id}`),
    create: (payload) => api.post("/tasks", payload),
    update: (id, payload) => api.put(`/tasks/${id}`, payload),
    remove: (id) => api.delete(`/tasks/${id}`),
};
