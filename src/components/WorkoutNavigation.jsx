import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutNavigation = () => {
    const workouts = [
        { name: 'Strength Training', path: 'strength' },
        { name: 'Cardio', path: 'cardio' },
        { name: 'Flexibility', path: 'flexibility' },
        { name: 'High Intensity Training', path: 'high-intensity' },
        { name: 'Endurance Training', path: 'endurance' },
        { name: 'Circuit Training', path: 'circuit' },
        { name: 'Functional Training', path: 'functional' },
        { name: 'Balance and Stability', path: 'balance' },
        { name: 'Group fitness class', path: 'group-fitness' },
        { name: 'Sport specific workouts', path: 'sport-specific' },
    ];

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100">
                {workouts.map((workout, index) => (
                    <Link
                        to={`/workout/${workout.path}`}
                        key={index}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm sm:text-base text-gray-800 hover:bg-gray-200 transition-all"
                    >
                        {workout.name}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default WorkoutNavigation;
