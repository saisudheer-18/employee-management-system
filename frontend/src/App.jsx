import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  patchEmployee,
} from "./api/employeeService";

import { DEFAULT_SALARY } from "./utils/constants";
import "./styles/App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    getAllEmployees()
      .then((res) => setEmployees(res.data))
      .catch(console.error);
  };

  const handleSubmit = (form) => {
    if (editEmployee) {
      updateEmployee(editEmployee.id, form)
        .then(() => {
          setEditEmployee(null);
          loadEmployees();
        })
        .catch(console.error);
    } else {
      createEmployee(form)
        .then(loadEmployees)
        .catch(console.error);
    }
  };

  const handleEdit = (emp) => setEditEmployee(emp);

  const handleDelete = (id) => {
    deleteEmployee(id)
      .then(loadEmployees)
      .catch(console.error);
  };

  const handlePatch = (id) => {
    patchEmployee(id, { salary: DEFAULT_SALARY })
      .then(loadEmployees)
      .catch(console.error);
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm
        onSubmit={handleSubmit}
        editEmployee={editEmployee}
      />

      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onPatch={handlePatch}
      />
    </div>
  );
}

export default App;