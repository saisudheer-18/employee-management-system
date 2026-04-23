import axios from "axios";

const BASE_URL = "http://localhost:8080/employees";

export const getAllEmployees = () => axios.get(BASE_URL);

export const createEmployee = (emp) => axios.post(BASE_URL, emp);

export const updateEmployee = (id, emp) =>
  axios.put(`${BASE_URL}/${id}`, emp);

export const patchEmployee = (id, emp) =>
  axios.patch(`${BASE_URL}/${id}`, emp);

export const deleteEmployee = (id) =>
  axios.delete(`${BASE_URL}/${id}`);