import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";

interface Achievement {
  id: number;
  title: string;
}

const AchievementsAdmin = () => {
  const [items, setItems] = useState<Achievement[]>([]);
  const [title, setTitle] = useState<string>("");

  const load = async () => {
    const data = await apiRequest<Achievement[]>(API_ENDPOINTS.ACHIEVEMENTS);
    setItems(data);
  };

  useEffect(() => {
    load();
  }, []);

  const add = async () => {
    if (!title.trim()) return;

    await apiRequest(API_ENDPOINTS.ACHIEVEMENTS, {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    setTitle("");
    load();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Achievements</h2>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Achievement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={add}
          className="bg-black text-white px-4 py-2"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {items.map((a) => (
          <li
            key={a.id}
            className="border p-2 rounded"
          >
            {a.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementsAdmin;
