import API from "../api";

function EmployeeList({ employees, onDelete }) {
  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    onDelete();
  };

  return (
    <>
      <h3>Employees</h3>

      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        employees.map((e) => (
          <div className="list-item" key={e.id}>
            <div>
              <strong>{e.name}</strong>
              <br />
              <small>{e.department}</small>
            </div>
            <button className="danger" onClick={() => deleteEmployee(e.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </>
  );
}

export default EmployeeList;
