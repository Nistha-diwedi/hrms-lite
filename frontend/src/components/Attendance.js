import { useEffect, useState } from "react";
import API from "../api";

function Attendance({ employees }) {
  const [employeeId, setEmployeeId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [records, setRecords] = useState([]);

  const markAttendance = async (e) => {
    e.preventDefault();
    await API.post("/attendance", {
      employee_id: Number(employeeId),
      date,
      status,
    });
    loadAttendance(employeeId);
  };

  const loadAttendance = async (id) => {
    if (!id) return;
    const res = await API.get(`/attendance/${id}`);
    setRecords(res.data);
  };

  useEffect(() => {
    loadAttendance(employeeId);
  }, [employeeId]);

  return (
    <div style={{ marginTop: 30 }}>
      <h3>Attendance</h3>

      <form onSubmit={markAttendance}>
        <select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required>
          <option value="">Select Employee</option>
          {employees.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button>Mark</button>
      </form>

      {records.length === 0 ? (
        <p>No attendance records</p>
      ) : (
        <ul>
          {records.map((r) => (
            <li key={r.id}>
              {r.date} — {r.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Attendance;
