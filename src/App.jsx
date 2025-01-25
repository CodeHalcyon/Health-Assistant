// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkoutNavigation from './components/WorkoutNavigation';
import DietPlan from './pages/DietPlan';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import './index.css';
import WorkoutCard from './components/WorkoutCard';
import Workout from './pages/Workout';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';

const WorkoutDetail = ({ name }) => {
  return (
    <div>
      <WorkoutCard  name={name.replace('-', ' ')}/>
    </div>
  );
};

const WorkoutDetailWrapper = () => {
  const { name } = useParams();
  return <WorkoutDetail name={name} />;
};

const WorkoutLayout = () => {
  return (
    <div>
      <WorkoutNavigation /> {/* Always visible for /workout and its subroutes */}
      <Outlet /> {/* Renders matched child routes */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/workout" element={<WorkoutLayout />}>
            <Route index element={<Workout/>} />
            <Route path=":name" element={<WorkoutDetailWrapper />} />
          </Route>
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
