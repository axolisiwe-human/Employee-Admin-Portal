import React, { useState } from 'react';
import './EmployeeList.css';

function EmployeeList({ employees, deleteEmployee, updateEmployee, searchEmployeeById }) {
  const [searchId, setSearchId] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  const handleEdit = (id) => {
    setEditEmployee(searchEmployeeById(id));
    setEditMode(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateEmployee(editEmployee.id, editEmployee);
    setEditMode(false);
    setEditEmployee(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEmployee({ ...editEmployee, [name]: value });
  };

  return (
    <div className="employee-list">
      <div className="search-form">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search by ID"
        />
        <button onClick={() => handleEdit(searchId)}>Search</button>
      </div>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <div>
              <strong>Name:</strong> {employee.name} <br />
              <strong>Email:</strong> {employee.email} <br />
              <strong>Phone:</strong> {employee.phone} <br />
              <strong>Position:</strong> {employee.position} <br />
              <button className="edit-button" onClick={() => handleEdit(employee.id)}>Edit</button>
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {editMode && (
        <form className="edit-form" onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            value={editEmployee.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={editEmployee.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="phone"
            value={editEmployee.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            name="position"
            value={editEmployee.position}
            onChange={handleChange}
            placeholder="Position"
            required
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default EmployeeList;
