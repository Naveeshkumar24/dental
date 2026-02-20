import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";
import { useNavigate } from "react-router-dom";

interface AboutResponse {
  content: string;
}

const AboutAdmin = () => {
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    apiRequest<AboutResponse>(API_ENDPOINTS.ABOUT).then((res) =>
      setContent(res.content)
    );
  }, []);

  const save = async () => {
    await apiRequest(API_ENDPOINTS.ABOUT, {
      method: "PUT",
      body: JSON.stringify({ content }),
    });
    alert("About updated");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* 🔙 Back */}
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="text-sm text-blue-600 hover:underline mb-4"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-xl mb-4">Edit About</h2>

      <textarea
        className="border w-full p-3 h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={save}
        className="mt-4 bg-black text-white px-6 py-2"
      >
        Save
      </button>
    </div>
  );
};

export default AboutAdmin;
