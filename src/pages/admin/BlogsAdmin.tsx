import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
}

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await apiRequest<Blog[]>(API_ENDPOINTS.BLOGS);
    setBlogs(data);
  };

  useEffect(() => {
    load();
  }, []);

  const create = async () => {
    await apiRequest(API_ENDPOINTS.BLOGS, {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    load();
  };

  const remove = async (id: number) => {
    await apiRequest(`${API_ENDPOINTS.BLOGS}/${id}`, {
      method: "DELETE",
    });
    load();
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

      <h2 className="text-xl mb-4">Blogs</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={create}
        className="bg-black text-white px-4 py-2 mb-6"
      >
        Create
      </button>

      {blogs.map((b) => (
        <div
          key={b.id}
          className="flex justify-between border p-3 mb-2"
        >
          <span>{b.title}</span>
          <button
            onClick={() => remove(b.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsAdmin;



