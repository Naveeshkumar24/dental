import {
  FileText,
  BookOpen,
  Award,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminDashboardCard from "@/components/AdminDashboardCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-600"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AdminDashboardCard
          title="Edit About"
          description="Update clinic information shown on the website"
          icon={<FileText className="w-5 h-5" />}
          to="/admin/about"
        />

        <AdminDashboardCard
          title="Manage Blogs"
          description="Create, edit, and delete blog posts"
          icon={<BookOpen className="w-5 h-5" />}
          to="/admin/blogs"
        />

        <AdminDashboardCard
          title="Certifications"
          description="Add or remove certifications"
          icon={<Award className="w-5 h-5" />}
          to="/admin/certifications"
        />

        <AdminDashboardCard
          title="User Queries"
          description="View messages submitted by visitors"
          icon={<MessageSquare className="w-5 h-5" />}
          to="/admin/queries"
        />
      </div>
    </div>
  );
};

export default Dashboard;
