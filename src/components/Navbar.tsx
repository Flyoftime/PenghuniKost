"use client";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent text-white fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:text-gray-400">
                            Home
                        </Link>
                        <a href="#trailer" className="hover:text-gray-400">
                            Trailer
                        </a>
                        <a href="#about" className="hover:text-gray-400">
                            Profile
                        </a>
                        <Link href="/Video" className="hover:text-gray-400">
                            Watch Now !
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden absolute right-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-400 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 bg-black bg-opacity-75 text-center">
                        <a
                            href="#home"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Overview
                        </a>
                        <a
                            href="#about"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Trailer
                        </a>
                        <a
                            href="#services"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Profile
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Watch Now !
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
