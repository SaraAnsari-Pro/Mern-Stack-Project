import gym from './791763.jpg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateExercise from './CreateExercise';
import ExerciseList from './ExerciseList';

function App() {
  return (
    <Router>
      <div className="body">
        <div className='navbar'>
          <div className="container">
            <h2 className="logo">ExcerTracker</h2>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Exercise</Link></li>
                <li> <Link to="/list">Exercise List</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <Route path='/create' exact component={CreateExercise} />
        <Route path='/list' exact component={ExerciseList} />


      </div>
    </Router>
  );
}

export default App;
