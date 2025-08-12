import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from './routes/AppRouter';
import Sidebar from "./layout/Sidebar/Sidebar";
import Setting from './components/setting/Setting';

function App() {
  return (
      <Router>
        <Setting/>
        <Sidebar />
        <AppRouter />
      </Router>
  );
}

export default App;
