import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";
import { useNavigate } from "react-router-dom";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: number;
}

const CertificationsAdmin = () => {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [certs, setCerts] = useState<Certification[]>([]);
  const navigate = useNavigate();

  const loadCerts = async () => {
    const data = await apiRequest<Certification[]>(API_ENDPOINTS.CERTIFICATIONS);
    setCerts(data);
  };

  useEffect(() => {
    loadCerts();
  }, []);

  const add = async () => {
    if (!title || !issuer || !year) {
      alert("All fields are required");
      return;
    }

    await apiRequest(API_ENDPOINTS.CERTIFICATIONS, {
      method: "POST",
      body: JSON.stringify({ title, issuer, year }),
    });

    setTitle("");
    setIssuer("");
    setYear(new Date().getFullYear());

    loadCerts();
  };

  const remove = async (id: number) => {
    const ok = window.confirm("Delete this certification?");
    if (!ok) return;

    await apiRequest(`${API_ENDPOINTS.CERTIFICATIONS}/${id}`, {
      method: "DELETE",
    });

    setCerts((prev) => prev.filter((c) => c.id !== id));
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

      <h2 className="text-xl font-semibold mb-6">Manage Certifications</h2>

      {/* ➕ ADD FORM */}
      <div className="space-y-3 mb-8">
        <input
          className="border p-2 w-full"
          placeholder="Certification Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Issuer (Organization)"
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
        />

        <input
          type="number"
          className="border p-2 w-full"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />

        <button
          onClick={add}
          className="bg-black text-white px-6 py-2"
        >
          Add Certification
        </button>
      </div>

      {/* 📋 CERTIFICATION LIST */}
      <div className="space-y-3">
        {certs.length === 0 && (
          <p className="text-muted-foreground">
            No certifications added yet
          </p>
        )}

        {certs.map((c) => (
          <div
            key={c.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-muted-foreground">
                {c.issuer} • {c.year}
              </p>
            </div>

            <button
              onClick={() => remove(c.id)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsAdmin;
