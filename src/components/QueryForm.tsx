import { useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";

const QueryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      await apiRequest(API_ENDPOINTS.QUERIES, {
        method: "POST",
        body: JSON.stringify(form),
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (e: any) {
      setError(e.message || "Failed to submit query");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="any-query"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Have a Question?
        </h2>

        <input
          className="w-full border p-3 mb-4 rounded"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full border p-3 mb-4 rounded"
          placeholder="Email Address"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          className="w-full border p-3 mb-4 rounded"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Query"}
        </button>

        {success && (
          <p className="text-green-600 text-center mt-4">
            Query submitted successfully
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center mt-4">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default QueryForm;