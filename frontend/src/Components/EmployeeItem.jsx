function EmployeeItem({ emp, onEdit, onDelete, onPatch }) {

  const formatSalary = (salary) =>
    salary ? `₹${Number(salary).toLocaleString()}` : "N/A";

  const handleDelete = () => {
    if (window.confirm(`Delete ${emp.name}?`)) {
      onDelete(emp.id);
    }
  };

  return (
    <li className="employee-item">

      <div className="emp-info">
        <h3>{emp.name || "No Name"}</h3>
        <p>📧 {emp.email || "No Email"}</p>
        <p>🏢 {emp.department || "No Dept"}</p>
        <p className="salary">💰 {formatSalary(emp.salary)}</p>
      </div>

      <div className="actions">
        <button className="edit-btn" onClick={() => onEdit(emp)}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
        <button className="patch-btn" onClick={() => onPatch(emp.id)}>Patch</button>
      </div>

    </li>
  );
}

export default EmployeeItem;