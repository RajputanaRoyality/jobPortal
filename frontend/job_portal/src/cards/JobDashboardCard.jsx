import { Briefcase } from "lucide-react";
import moment from "moment";
import logo from "../assets/logo.png"

const JobDashboardCard = ({ job }) => {
    return (
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transform-colors">
            <div className="flex items-center space-x-4">

                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-50 h-15 object-cover rounded-md"  // Adjust size as needed
                    />
                </div>

                <div >
                    <h4 className="text-[15px] font-medium text-gray-900">{job.title}</h4>
                    <p className="text-xs text-gray-500">
                        {job.location} • {moment(job.createdAt)?.format("Do MM YYYY")}
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${!job.isClosed
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                        }`}
                >
                    {job.isClosed ? "Closed" : "Active"}
                </span>
            </div>
        </div>
    );
};

export default JobDashboardCard;