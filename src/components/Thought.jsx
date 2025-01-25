import React, { useEffect } from 'react';
import gsap from 'gsap';

const Thought = () => {
    useEffect(() => {
        const elements = gsap.utils.toArray('.tht'); // Target all elements with the 'tht' class
        gsap.fromTo(
            elements,
            { opacity: 0, y: 200 }, // Initial state (hidden and below)
            { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', stagger: 0.2 } // Animate with stagger
        );
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-white">
            {/* Text Section */}
            <div className="text-center px-4 md:w-1/2">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold leading-relaxed">
                    "<span className="tht">Every </span>
                    <span className="tht">workout </span>
                    <span className="tht">is </span>
                    <span className="tht">progress, </span><br />
                    <span className="tht">no </span>
                    <span className="tht">matter </span>
                    <span className="tht">how </span>
                    <span className="tht">small </span>"
                </span>
            </div>

            {/* Image Section */}
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    className="w-4/5 md:w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
                    src="https://www.ahigherbranch.com/wp-content/uploads/2019/06/David-Goggins.jpg"
                    alt="David Goggins"
                />
            </div>
        </div>
    );
};

export default Thought;
