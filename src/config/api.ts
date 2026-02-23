/**
 * API CONFIGURATION FILE
 * Connects React frontend to Golang backend
 */

/* ===============================
   BASE URL
================================ */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE || "http://localhost:8080";

/* ===============================
   API ENDPOINTS
================================ */
export const API_ENDPOINTS = {
  /* -------- PUBLIC -------- */
  ABOUT: `${API_BASE_URL}/api/about`,
  ACHIEVEMENTS: `${API_BASE_URL}/api/achievements`,
  CERTIFICATIONS: `${API_BASE_URL}/api/certifications`,
  BLOGS: `${API_BASE_URL}/api/blogs`,
  BLOG_BY_SLUG: (slug: string) => `${API_BASE_URL}/api/blogs/${slug}`,
  QUERIES: `${API_BASE_URL}/api/queries`,

  /* -------- AUTH -------- */
  LOGIN: `${API_BASE_URL}/api/login`,

  /* -------- ADMIN (JWT) -------- */
  ADMIN_QUERIES: `${API_BASE_URL}/api/queries`,
  ADMIN_BLOGS: `${API_BASE_URL}/api/blogs`,
  ADMIN_CERTIFICATIONS: `${API_BASE_URL}/api/certifications`,
};

/* ===============================
   GENERIC API REQUEST (SAFE)
================================ */
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("token");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `API Error: ${response.status}`);
  }

  // Read raw text first
  const text = await response.text();

  // ✅ CRITICAL FIX: NEVER return null
  if (!text) {
    return [] as unknown as T;
  }

  const data = JSON.parse(text);

  // ✅ EXTRA SAFETY: backend might send null
  if (data === null) {
    return [] as unknown as T;
  }

  return data;
}