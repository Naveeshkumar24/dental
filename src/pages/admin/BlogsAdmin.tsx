import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  content?: string;
}

const BlogsAdmin = () => {
  const navigate = useNavigate();

  // ✅ ALWAYS INITIALIZE AS ARRAY
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // ===============================
  // LOAD BLOGS
  // ===============================
  const loadBlogs = async () => {
    try {
      setLoading(true);
      const data = await apiRequest<Blog[]>(API_ENDPOINTS.BLOGS);

      // ✅ SAFETY: ensure array
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load blogs", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // ===============================
  // CREATE BLOG
  // ===============================
  const createBlog = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required");
      return;
    }

    try {
      await apiRequest(API_ENDPOINTS.BLOGS, {
        method: "POST",
        body: JSON.stringify({ title, content }),
      });

      setTitle("");
      setContent("");
      loadBlogs();
    } catch (err) {
      alert("Failed to create blog");
      console.error(err);
    }
  };

  // ===============================
  // DELETE BLOG
  // ===============================
  const deleteBlog = async (id: number) => {
    if (!confirm("Delete this blog?")) return;

    try {
      await apiRequest(`${API_ENDPOINTS.BLOGS}/${id}`, {
        method: "DELETE",
      });
      loadBlogs();
    } catch (err) {
      alert("Failed to delete blog");
      console.error(err);
    }
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="text-sm text-blue-600 hover:underline mb-4"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-xl font-semibold mb-4">Blogs</h2>

      {/* Create Blog */}
      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={createBlog}
        className="bg-black text-white px-4 py-2 mb-6"
      >
        Create Blog
      </button>

      {/* Blog List */}
      {loading ? (
        <p className="text-sm text-gray-500">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-sm text-gray-500">No blogs found</p>
      ) : (
        blogs.map((b) => (
          <div
            key={b.id}
            className="flex justify-between items-center border p-3 mb-2"
          >
            <span className="font-medium">{b.title}</span>
            <button
              onClick={() => deleteBlog(b.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogsAdmin;