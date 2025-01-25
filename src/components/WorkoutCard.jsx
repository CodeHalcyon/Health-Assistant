import React from 'react';

const WorkoutCard = (props) => {
    return (
        <>
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative">
                    <img
                        loading="lazy"
                        src={props.link}
                        alt={props.name}
                        className="w-full h-40 object-cover"
                    />
                </div>
                <div className="flex flex-col p-4 gap-3">
                    <h1 className="font-bold text-lg md:text-xl">{props.name}</h1>
                    <p className="text-xs sm:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                        corporis ratione hic odio aut aliquam assumenda. Quo quos mollitia
                        accusamus.
                    </p>
                    <div className="text-center mt-auto">
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline"
                        >
                            YouTube Link
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkoutCard;
