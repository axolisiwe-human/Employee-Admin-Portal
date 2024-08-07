// src/components/Register.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Registration = () => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    // addUsers({...user, id });
    setUser({
        id: '',
        username: '',
        email: '',
        password: ''
      
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <Input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button type="submit">Register</Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Registration;