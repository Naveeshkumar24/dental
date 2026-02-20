import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  icon?: ReactNode;
  to: string;
}

const AdminDashboardCard = ({ title, description, icon, to }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(to)}
      className="cursor-pointer border rounded-xl p-6 hover:shadow-lg transition"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default AdminDashboardCard;
