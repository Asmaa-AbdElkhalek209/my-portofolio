import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from './routes/AppRouter';
import Sidebar from "./layout/Sidebar/Sidebar";

function App() {
  return (
      <Router>
        <Sidebar />
        <AppRouter />
      </Router>
  );
}

export default App;
