import { useEffect, useState } from "react";
import API from "./api";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Attendance from "./components/Attendance";
import "./index.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="container">
      <h2>HRMS Lite Dashboard</h2>

      <div className="card">
        <EmployeeForm onAdd={loadEmployees} />
      </div>

      <div className="card">
        <EmployeeList employees={employees} onDelete={loadEmployees} />
      </div>

      {employees.length > 0 && (
        <div className="card">
          <Attendance employees={employees} />
        </div>
      )}
    </div>
  );
}

export default App;
