import EmployeeItem from "./EmployeeItem";

function EmployeeList({ employees, onEdit, onDelete, onPatch }) {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <EmployeeItem
              key={emp.id}
              emp={emp}
              onEdit={onEdit}
              onDelete={onDelete}
              onPatch={onPatch}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;