import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addEmployee = (employee) => {
    fetch('http://localhost:5000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
    .then(response => response.json())
    .then(data => {
      setEmployees([...employees, data]);
    })
    .catch(error => console.error('Error adding employee:', error));
  };

  const deleteEmployee = (id) => {
    fetch(`http://localhost:5000/employees/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedEmployees = employees.filter(emp => emp.id !== id);
      setEmployees(updatedEmployees);
    })
    .catch(error => console.error('Error deleting employee:', error));
  };

  const updateEmployee = (id, updatedEmployee) => {
    fetch(`http://localhost:5000/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    })
    .then(response => response.json())
    .then(data => {
      const updatedEmployees = employees.map(emp =>
        emp.id === id ? data : emp
      );
      setEmployees(updatedEmployees);
    })
    .catch(error => console.error('Error updating employee:', error));
  };

  const searchEmployeeById = (id) => {
    return employees.find(emp => emp.id === id);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
        searchEmployeeById={searchEmployeeById}
      />
    </div>
  );
}

export default App;
