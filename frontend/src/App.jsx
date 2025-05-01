
import React from 'react'
import {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import  Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
const App = () => {
  return (
    <Router>
    <Navbar />
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route
          path="/student-dashboard"
          element={<ProtectedRoute role="student" Component={StudentDashboard} />}
        />
        <Route
          path="/faculty-dashboard"
          element={<ProtectedRoute role="faculty" Component={FacultyDashboard} />}
        />
        
      </Routes>
    </div>
    <Footer />
  </Router>
  )
}

export default App
