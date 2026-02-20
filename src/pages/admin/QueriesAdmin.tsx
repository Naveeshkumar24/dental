import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";
import { useNavigate } from "react-router-dom";

interface Query {
  id: number;
  name: string;
  email: string;
  message: string;
}

const QueriesAdmin = () => {
  const [queries, setQueries] = useState<Query[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiRequest<Query[]>(API_ENDPOINTS.ADMIN_QUERIES).then(setQueries);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline mb-4"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">User Queries</h2>

      {queries.map((q) => (
        <div key={q.id} className="border p-3 mb-2 rounded">
          <p className="font-medium">
            {q.name}{" "}
            <span className="text-muted-foreground">
              ({q.email})
            </span>
          </p>
          <p className="mt-1">{q.message}</p>
        </div>
      ))}
    </div>
  );
};

export default QueriesAdmin;
