import React from 'react';

const DietCard = (props) => {
    return (
        <>
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] bg-amber-100 p-4 rounded-2xl transition-all shadow-lg hover:shadow-2xl">
                <img
                    src={props.img}
                    className="hover:scale-105 transition-all rounded-2xl mb-[10px] w-full h-40 object-cover"
                    alt="Diet Plan"
                />
                <h1 className="text-lg sm:text-xl font-bold text-center">
                    <a href={props.src} className="text-blue-600 hover:underline">
                        {props.name}
                    </a>
                </h1>
            </div>
        </>
    );
};

export default DietCard;
