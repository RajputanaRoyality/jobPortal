import { Briefcase } from "lucide-react";
import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="relative bg-gray-50 text-gray-900 overflow-hidden min-h-screen">
            <div className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="text-center space-y-8">
                        {/* Logo/Brand */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center space-x-2 mb-6">
                                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-100 h-30 object-cover rounded-md"  // Adjust size as needed
                                    />
                                </div>
                                <br />





                            </div>


                            <p className="text-sm text-gray-600 max-w-md mx-auto mt-20">
                                Connecting talented professionals with innovative companies
                                worldwide. Your career success is our mission.
                            </p>

                            {/* Copyright */}
                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">
                                    © {new Date().getFullYear()} Program Year
                                </p>
                                <p className={`text-xs text-gray-600`}>
                                    All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
