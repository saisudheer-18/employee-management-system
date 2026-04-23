import { useState, useEffect } from "react";

function EmployeeForm({ onSubmit, editEmployee }) {
  const initialState = {
    name: "",
    email: "",
    department: "",
    salary: "",
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editEmployee) {
      setForm(editEmployee);
    } else {
      setForm(initialState);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "salary" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);

    // Reset only if creating
    if (!editEmployee) {
      setForm(initialState);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
      <input type="number" name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" required />

      <button type="submit">
        {editEmployee ? "Update Employee" : "Create Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;