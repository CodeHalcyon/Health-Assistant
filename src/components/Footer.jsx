import React from 'react';

const socialIcons = [
    {
        href: "#",
        svgPath: "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809...",
        label: "Twitter",
    },
    {
        href: "#",
        svgPath: "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127...",
        label: "Facebook",
    },
    {
        href: "#",
        svgPath: "M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1...",
        label: "Instagram",
    },
];

const Footer = () => {
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {/* Horizontal Navbar */}
                <nav className="mb-10">
                    <ul className="flex justify-center space-x-6 text-gray-600">
                        <li>
                            <a href="#" className="hover:text-blue-600 transition duration-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600 transition duration-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600 transition duration-200">Services</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600 transition duration-200">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="flex flex-col">
                        <img
                            className="w-auto h-9"
                            src="/images/logo.png"
                            alt="Company Logo"
                        />
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Baymax :This online health and fitness assistant provides only general guidance and tips for wellness. Always consult a healthcare professional's advice.
                        </p>
                        <ul className="flex items-center space-x-3 mt-9">
                            {socialIcons.map((icon, index) => (
                                <li key={index}>
                                    <a
                                        href={icon.href}
                                        title={icon.label}
                                        aria-label={icon.label}
                                        className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                    >
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d={icon.svgPath}></path>
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Center Section */}
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900">Subscribe to our Newsletter</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Get the latest updates and offers in your inbox.
                        </p>
                        <form className="mt-4 flex items-center justify-center">
                            <input
                                type="email"
                                className="w-full max-w-xs px-4 py-2 text-gray-900 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-end">
                        <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-200">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-200">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-200">FAQs</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-200">Contact Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Footer;
