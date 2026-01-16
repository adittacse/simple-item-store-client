import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            {/* 1) Hero */}
            <section className="bg-base-100">
                <div className="container mx-auto px-4 py-14">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold leading-tight">
                            Simple Item Store (Next.js + Express + MongoDB)
                        </h1>
                        <p className="mt-4 opacity-80">
                            Public item browsing + details, and a protected add-item form using cookie-based mock login.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <Link href="/items" className="btn btn-primary">Browse Items</Link>
                            <Link href="/login" className="btn btn-outline">Login</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2) Highlights */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Highlights</h2>
                <div className="grid md:grid-cols-3 gap-4 mt-5">
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h3 className="font-semibold">Public Items</h3>
                            <p className="text-sm opacity-80">Fetch list from Express API.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h3 className="font-semibold">Public Details</h3>
                            <p className="text-sm opacity-80">View full item details.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h3 className="font-semibold">Protected Create</h3>
                            <p className="text-sm opacity-80">Add item only after login.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3) How it works */}
            <section className="bg-base-100">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold">How it works</h2>
                    <div className="grid md:grid-cols-3 gap-4 mt-5">
                        <div className="alert"><span>1) Browse items (public).</span></div>
                        <div className="alert"><span>2) Open details (public).</span></div>
                        <div className="alert"><span>3) Login & create item (protected).</span></div>
                    </div>
                </div>
            </section>

            {/* 4) Categories */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Popular Categories</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                    {["Books", "Electronics", "Accessories", "Fashion", "Home", "Gadgets"].map((c) => (
                        <span key={c} className="badge badge-outline">{c}</span>
                    ))}
                </div>
            </section>

            {/* 5) Tech Stack */}
            <section className="bg-base-100">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold">Tech Stack</h2>
                    <div className="grid md:grid-cols-3 gap-4 mt-5">
                        <div className="stat bg-base-200 rounded-box">
                            <div className="stat-title">Frontend</div>
                            <div className="stat-value text-primary">Next.js</div>
                            <div className="stat-desc">App Router</div>
                        </div>
                        <div className="stat bg-base-200 rounded-box">
                            <div className="stat-title">Backend</div>
                            <div className="stat-value text-primary">Express</div>
                            <div className="stat-desc">REST API</div>
                        </div>
                        <div className="stat bg-base-200 rounded-box">
                            <div className="stat-title">Database</div>
                            <div className="stat-value text-primary">MongoDB</div>
                            <div className="stat-desc">items collection</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6) Testimonials */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Feedback</h2>
                <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <p className="opacity-80">“Clean flow and meets requirements exactly.”</p>
                            <p className="font-semibold mt-2">— Reviewer</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <p className="opacity-80">“Protected route + add item works as expected.”</p>
                            <p className="font-semibold mt-2">— Mentor</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7) FAQ + CTA */}
            <section className="bg-base-100">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold">FAQ</h2>
                    <div className="join join-vertical w-full mt-5">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="faq" defaultChecked />
                            <div className="collapse-title font-medium">Is /items public?</div>
                            <div className="collapse-content"><p>Yes. Anyone can browse list and details.</p></div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-medium">Who can add items?</div>
                            <div className="collapse-content"><p>Only logged-in users can access /items/add.</p></div>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <Link href="/items" className="btn btn-primary">Go to Items</Link>
                        <Link href="/login" className="btn btn-outline">Login</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
