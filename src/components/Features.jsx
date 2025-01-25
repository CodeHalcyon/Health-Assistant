import React from 'react';
const cards = [
    {
        title: 'Health Tracking',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
        svgPath: '<svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>', // Add SVG paths here
    },
    {
        title: 'AI Based Diet Planning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
        svgPath: '<svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 27H19V45H27V27Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />        <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />        <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />        <path d="M5 17L15 7L23 15L37 1" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />        <path d="M28 1H37V10" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />    </svg>',
    },
    {
        title: 'Analyze your Health with Graphs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
        svgPath: `<svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 1H1V41H41V1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 7H7V20H18V7Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 26H7V35H18V26Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
    },
];

const Card = ({ title, description, svgPath }) => (
    <div className="md:p-8 lg:p-14">
        <div dangerouslySetInnerHTML={{ __html: svgPath }} />
        <h3 className="mt-12 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-5 text-base text-gray-600">{description}</p>
    </div>
);

const Features = () => (
    <section className="py-12 bg-white sm:py-16 lg:py-20 min-h-screen flex items-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                    Make every step user-centric
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-y-12 text-center sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 lg:gap-16">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    </section>
);


export default Features;
