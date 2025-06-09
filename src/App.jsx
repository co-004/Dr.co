// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Journal from './pages/Journal'
import Quest from './pages/Quest'
import Bag from './pages/Bag'
import Login from './pages/Login'
import Layout from './assets/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App

