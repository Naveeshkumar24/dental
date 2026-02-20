import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiRequest, API_ENDPOINTS } from "@/config/api";

interface Blog {
  title: string;
  content: string;
  created_at?: string;
}

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const loadBlog = async () => {
      try {
        const data = await apiRequest<Blog>(
          `${API_ENDPOINTS.BLOGS}/${slug}`
        );
        setBlog(data);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return <div className="p-10 text-center">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 🔙 REAL BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mt-4 mb-2">
        {blog.title}
      </h1>

      {blog.created_at && (
        <p className="text-sm text-muted-foreground mb-6">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetails;
