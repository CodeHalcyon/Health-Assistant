import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

const CalorieMeter = () => {
    const [targetCalories, setTargetCalories] = useState(500); // Example target
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [stepsWalked, setStepsWalked] = useState(0);
    const [isConfettiActive, setIsConfettiActive] = useState(false);

    // Simulate steps walking for now
    useEffect(() => {
        const interval = setInterval(() => {
            if (caloriesBurned < targetCalories) {
                setStepsWalked(prevSteps => prevSteps + Math.floor(Math.random() * 100));
            }
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clear interval when the component unmounts
    }, [caloriesBurned]);

    useEffect(() => {
        const caloriesPerStep = 0.04; // Calories burned per step
        const newCaloriesBurned = stepsWalked * caloriesPerStep;
        if (newCaloriesBurned >= targetCalories) {
            setCaloriesBurned(targetCalories); // Stop at the target
            setIsConfettiActive(true); // Trigger confetti animation
        } else {
            setCaloriesBurned(newCaloriesBurned);
        }
    }, [stepsWalked, targetCalories]);

    const handleCaloriesInput = (e) => {
        setTargetCalories(e.target.value);
        setCaloriesBurned(0); // Reset calories burned when new target is set
        setIsConfettiActive(false); // Reset confetti animation
    };

    return (
        <div className="calorie-meter mt-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl p-8 shadow-2xl w-[20%]">
            {/* Confetti animation when target is reached */}
            {isConfettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            <h2 className="text-2xl font-semibold text-white mb-4">Calorie Meter</h2>

            <div className="form mb-4">
                <label htmlFor="targetCalories" className="block text-sm font-medium text-white">Calories to Burn</label>
                <input
                    type="number"
                    id="targetCalories"
                    value={targetCalories}
                    onChange={handleCaloriesInput}
                    className="mt-2 p-2 border-2 border-white rounded-md w-full bg-transparent text-white placeholder:text-gray-300 focus:outline-none"
                    placeholder="Enter calories to burn"
                />
            </div>

            {/* Progress Bar */}
            <div className="progress mt-6" style={{ width: "200px", height: "200px", position: "relative" }}>
                <CircularProgressbar
                    value={caloriesBurned}
                    maxValue={targetCalories}
                    text={`${caloriesBurned.toFixed(1)} kcal 🔥`}
                    styles={{
                        path: {
                            stroke: `rgba(75, 192, 192, ${caloriesBurned / targetCalories})`,
                            strokeLinecap: 'round',
                        },
                        text: {
                            fill: caloriesBurned === targetCalories ? "green" : "white",
                            fontSize: '12px',
                            fontWeight: 'bold',
                        },
                        trail: {
                            stroke: '#ddd',
                        }
                    }}
                />
                {/* Emoji centered */}
                <div className="absolute inset-0 flex justify-center items-center text-2xl text-white">
                    {caloriesBurned >= targetCalories ? "🎉" : ""}
                </div>
            </div>

            {/* Tips for burning more calories */}
            <div className="tips mt-8 text-white">
                <h3 className="text-lg font-semibold mb-3">Tips to Burn More Calories</h3>
                <ul className="list-disc pl-5">
                    <li>Walk for 30 minutes every day.</li>
                    <li>Take the stairs instead of the elevator.</li>
                    <li>Engage in a fun physical activity like dancing or cycling.</li>
                    <li>Try interval training to burn more calories in less time.</li>
                    <li>Drink water before meals to boost your metabolism.</li>
                </ul>
            </div>
        </div>
    );
};

export default CalorieMeter;
