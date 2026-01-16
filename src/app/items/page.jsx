import Link from "next/link";
import { fetchItems } from "@/lib/api";

export default async function ItemsPage({ searchParams }) {
    const search = searchParams?.search || "";
    const category = searchParams?.category || "";
    const sort = searchParams?.sort || "newest";

    const items = await fetchItems({ search, category, sort });

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex items-center justify-between gap-3 mb-6">
                <h1 className="text-3xl font-bold">Items</h1>
                <Link href="/items/add" className="btn btn-primary">Add Item</Link>
            </div>

            {/* Filters (query-based, matches backend) */}
            <div className="bg-base-100 shadow rounded-box p-4 mb-6">
                <form className="grid md:grid-cols-4 gap-3">
                    <input
                        name="search"
                        defaultValue={search}
                        className="input input-bordered"
                        placeholder="Search name/description"
                    />
                    <input
                        name="category"
                        defaultValue={category}
                        className="input input-bordered"
                        placeholder="Category"
                    />
                    <select name="sort" defaultValue={sort} className="select select-bordered">
                        <option value="newest">Newest</option>
                        <option value="price_low">Price Low</option>
                        <option value="price_high">Price High</option>
                    </select>
                    <button className="btn btn-outline">Apply</button>
                </form>
            </div>

            {!items?.length ? (
                <div className="alert">
                    <span>No items found.</span>
                </div>
            ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it) => (
                        <div key={it._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={it.imageUrl}
                                    alt={it.name}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{it.name}</h2>
                                <p className="opacity-80 text-sm line-clamp-2">{it.description}</p>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="font-semibold">${it.price}</span>
                                    <Link className="btn btn-sm btn-outline" href={`/items/${it._id}`}>
                                        Details
                                    </Link>
                                </div>

                                {it.category ? (
                                    <div className="mt-2">
                                        <span className="badge badge-outline">{it.category}</span>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
