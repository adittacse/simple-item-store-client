"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createItem } from "@/lib/api";

export default function AddItemPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);

        const payload = {
            name: String(fd.get("name") || "").trim(),
            description: String(fd.get("description") || "").trim(),
            imageUrl: String(fd.get("imageUrl") || "").trim(),
            category: String(fd.get("category") || "").trim(),
            price: Number(fd.get("price") || 0),
        };

        if (!payload.name || !payload.description || !payload.imageUrl || !payload.price) {
            toast.error("Please fill required fields");
            return;
        }

        setLoading(true);
        try {
            await createItem(payload);
            toast.success("Item created successfully");
            router.replace("/items");
            router.refresh();
        } catch (err) {
            toast.error(err.message || "Failed to create item");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6">Add Item</h1>

            <form onSubmit={submit} className="card bg-base-100 shadow-xl">
                <div className="card-body space-y-3">
                    <input name="name" className="input input-bordered" placeholder="Name *" required />
                    <textarea
                        name="description"
                        className="textarea textarea-bordered"
                        placeholder="Description *"
                        required
                    />
                    <input name="price" type="number" className="input input-bordered" placeholder="Price *" required />
                    <input name="imageUrl" className="input input-bordered" placeholder="Image URL *" required />
                    <input name="category" className="input input-bordered" placeholder="Category (optional)" />

                    <button className="btn btn-primary" disabled={loading}>
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : null}
                        {loading ? "Creating..." : "Create Item"}
                    </button>
                </div>
            </form>
        </div>
    );
}
