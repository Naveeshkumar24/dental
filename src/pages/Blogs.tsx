import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest, API_ENDPOINTS } from "@/config/api";

interface Blog {
  id: number;
  title: string;
  slug: string;
  created_at?: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await apiRequest<Blog[]>(API_ENDPOINTS.BLOGS);
        setBlogs(data);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {blogs.length === 0 && (
        <p className="text-muted-foreground">No blogs available</p>
      )}

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.slug}`}
            className="block border p-4 rounded hover:shadow transition"
          >
            <h2 className="text-xl font-semibold">
              {blog.title}
            </h2>

            {blog.created_at && (
              <p className="text-sm text-muted-foreground mt-1">
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
