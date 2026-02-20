import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest, API_ENDPOINTS } from "@/config/api";

interface Blog {
  id: number;
  title: string;
  slug: string;
  image?: string | null;
  created_at: string;
}

const BlogsPreview = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest<Blog[]>(API_ENDPOINTS.BLOGS)
      .then(setBlogs)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <section className="py-16 text-center">Loading blogs...</section>;
  }

  if (error) {
    return (
      <section className="py-16 text-center text-red-600">
        Failed to load blogs
      </section>
    );
  }

  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Latest Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow transition bg-white"
          >
            {/* 🖼️ IMAGE — 100% SAFE */}
            {typeof blog.image === "string" &&
              blog.image.trim() !== "" && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

            <div className="p-5">
              <h3 className="font-medium text-lg mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-500">
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/blogs"
          className="inline-block px-6 py-2 border rounded hover:bg-black hover:text-white transition"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogsPreview;
