const BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchItems({ search = "", category = "", sort = "newest" } = {}) {
    const url = new URL(`${BASE}/items`);

    const s = String(search ?? "").trim();
    const c = String(category ?? "").trim();
    const so = String(sort ?? "newest").trim();

    // only attach if value exists
    if (s) url.searchParams.set("search", s);
    if (c) url.searchParams.set("category", c);
    if (so) url.searchParams.set("sort", so);

    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
}

export async function fetchItemById(id) {
    const res = await fetch(`${BASE}/items/${id}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Item not found");
    }
    return res.json();
}

export async function createItem(payload) {
    const res = await fetch(`${BASE}/items`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(data?.message || "Failed to create item");
    }

    return data;
}
