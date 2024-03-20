import React from "react";

function Footer() {
    return (
        <footer className="">
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full lg:w-1/3 lg:text-left text-center mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>
                <div className="w-full lg:w-1/3 lg:text-left text-center mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="list-none p-0">
                        <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
                        <li><a href="/about" className="text-white hover:text-gray-400">About Us</a></li>
                        <li><a href="/services" className="text-white hover:text-gray-400">Services</a></li>
                        <li><a href="/contact" className="text-white hover:text-gray-400">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/3 lg:text-left text-center">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center">
                        <a href="#" className="text-white mr-4 hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-white mr-4 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} Example Company. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer