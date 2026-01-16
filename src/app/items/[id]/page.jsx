import { fetchItemById } from "@/lib/api";

export default async function ItemDetailsPage({ params }) {
    let item = null;

    try {
        item = await fetchItemById(params.id);
    } catch (e) {
        return (
            <div className="container mx-auto px-4 py-10">
                <div className="alert alert-error">
                    <span>Item not found.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={item?.imageUrl}
                        alt={item?.name}
                        className="max-h-[420px] w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h1 className="text-3xl font-bold">{item?.name}</h1>
                    <p className="opacity-80">{item?.description}</p>

                    <div className="mt-4 flex flex-wrap gap-3 items-center">
                        <span className="badge badge-primary">Price: ${item?.price}</span>
                        {
                            item.category ? <span className="badge badge-outline">{item.category}</span> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
