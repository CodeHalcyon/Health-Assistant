import React,{useState} from 'react'

const BMICalcli = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState("");
    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100; // Convert height from cm to meters
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2)); // Set BMI value rounded to 2 decimal places

            // BMI categories
            if (bmiValue < 18.5) {
                setBmiCategory("Underweight");
            } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
                setBmiCategory("Normal weight");
            } else if (bmiValue >= 25 && bmiValue <= 29.9) {
                setBmiCategory("Overweight");
            } else {
                setBmiCategory("Obesity");
            }
        }
    };
    return (
        <>
            <div className="bmi-calculator mt-8">
                <h2 className="text-xl mb-4">BMI Calculator</h2>
                <div className="form">
                    <div className="mb-4">
                        <label htmlFor="weight" className="block text-sm font-medium">Weight (kg)</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="mt-2 p-2 border rounded-md w-full"
                            placeholder="Enter your weight"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="height" className="block text-sm font-medium">Height (cm)</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="mt-2 p-2 border rounded-md w-full"
                            placeholder="Enter your height"
                        />
                    </div>
                    <button
                        onClick={calculateBMI}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full"
                    >
                        Calculate BMI
                    </button>

                    {bmi && (
                        <div className="result mt-4">
                            <p>Your BMI is: <strong>{bmi}</strong></p>
                            <p>Category: <strong>{bmiCategory}</strong></p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BMICalcli
