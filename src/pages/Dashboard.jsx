import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CalorieMeter from "../components/CalorieMeter";
import BMICalcli from "../components/BMICalcli";


// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [stepData, setStepData] = useState(null);
  const [sleepData, setSleepData] = useState(null);
  const [periodData, setPeriodData] = useState([]);
  const [activityData, setActivityData] = useState(null);
  const [targetCalories, setTargetCalories] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [stepsWalked, setStepsWalked] = useState(0); // Step count from real-time data

  // Function to generate random data (just for demonstration)
  const generateRandomData = (size, min, max) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  };



  // Example period data (dates when periods occur)
  const generatePeriodData = () => {
    const periods = [
      new Date(2025, 0, 5), // Jan 5
      new Date(2025, 0, 12), // Jan 12
      new Date(2025, 0, 20), // Jan 20
    ];
    return periods;
  };

  // Simulate steps walking for now
  useEffect(() => {
    const interval = setInterval(() => {
      setStepsWalked(prevSteps => prevSteps + Math.floor(Math.random() * 100)); // Random step count
    }, 10000); // Update every second

    return () => clearInterval(interval); // Clear interval when the component unmounts
  }, []);
  useEffect(() => {
    const caloriesPerStep = 0.04; // You can customize this based on user weight
    setCaloriesBurned(stepsWalked * caloriesPerStep); // Calculate calories burned
  }, [stepsWalked]);


  useEffect(() => {
    const stepCounts = generateRandomData(7, 5000, 15000);
    const sleepDataArr = generateRandomData(7, 6, 9);
    const activityDataArr = generateRandomData(7, 20, 120); // Example activity data

    // Set Period Data
    const periodDates = generatePeriodData();
    setPeriodData(periodDates);

    // Update the individual states with data
    setStepData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Step Count (per day)",
        data: stepCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Modern color
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      }],
    });

    setSleepData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Sleeping Time (hrs)",
        data: sleepDataArr,
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Cool purple color
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
      }],
    });

    setActivityData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Activity Tracker (minutes)",
        data: activityDataArr,
        backgroundColor: "rgba(255, 159, 64, 0.6)", // Bright orange color
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 2,
      }],
    });
  }, []);

  // Custom function to highlight period days on the calendar
  const tileClassName = ({ date, view }) => {
    // If in month view and the date is in periodData, add a special class
    if (view === "month" && periodData.some(periodDate => periodDate.toDateString() === date.toDateString())) {
      return 'bg-green-500 text-white'; // Green background for period days, ensuring it overrides other styles
    }
    return '';
  };

  return (
    <div className="App">
      {/* Calorie Tracker */}
      <CalorieMeter />
      <h1 className="text-3xl font-bold text-center mb-8">Health Dashboard</h1>

      <div className="charts-container grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {stepData && (
          <div className="chart">
            <h2 className="text-xl mb-4">Step Count (per day)</h2>
            <Bar data={stepData} options={{
              responsive: true,
              plugins: { title: { display: true, text: "Step Count over the Week" } },
            }} />
          </div>
        )}

        {sleepData && (
          <div className="chart">
            <h2 className="text-xl mb-4">Sleeping Time (hrs)</h2>
            <Bar data={sleepData} options={{
              responsive: true,
              plugins: { title: { display: true, text: "Sleeping Time over the Week" } },
            }} />
          </div>
        )}

        {periodData && (
          <div className="chart">
            <h2 className="text-xl mb-4">Period Tracker</h2>
            <Calendar
              onChange={() => { }}
              value={new Date()}
              tileClassName={tileClassName}
            />
          </div>
        )}

        {activityData && (
          <div className="chart">
            <h2 className="text-xl mb-4">Activity Tracker (minutes)</h2>
            <Bar data={activityData} options={{
              responsive: true,
              plugins: { title: { display: true, text: "Activity Tracker over the Week" } },
            }} />
          </div>
        )}

        {/* BMI Calculator */}
        <BMICalcli />

        



      </div>
    </div>
  );
};

export default Dashboard;
