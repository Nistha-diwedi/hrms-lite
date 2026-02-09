import { useState } from "react";
import API from "../api";

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    employee_id: "",
    name: "",
    email: "",
    department: "",
    designation: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/employees", form);
    setForm({
      employee_id: "",
      name: "",
      email: "",
      department: "",
      designation: "",
    });
    onAdd();
  };

  return (
    <>
      <h3>Add Employee</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="employee_id"
          placeholder="Employee ID"
          value={form.employee_id}
          onChange={handleChange}
          required
        />
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          required
        />
        <input
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
          required
        />
        <button>Add Employee</button>
      </form>
    </>
  );
}

export default EmployeeForm;
