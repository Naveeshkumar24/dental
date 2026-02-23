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

  // Read raw text
  const text = await response.text();

  // ✅ CRITICAL FIX: never return null
  if (!text) {
    return [] as unknown as T;
  }

  const data = JSON.parse(text);

  // ✅ EXTRA SAFETY: if backend sends null
  if (data === null) {
    return [] as unknown as T;
  }

  return data;
}