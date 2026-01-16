"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const sp = useSearchParams();
    const next = sp.get("next") || "/items";

    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data?.message || "Login failed");
            }

            toast.success("Login successful");
            router.replace(next); // requirement: redirect to items page
            router.refresh();
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <form onSubmit={submit} className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Login</h1>

                    <label className="form-control">
                        <span className="label-text">Email</span>
                        <input
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text">Password</span>
                        <input
                            type="password"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <button className="btn btn-primary" disabled={loading}>
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : null}
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <p className="text-sm opacity-70">
                        Demo: <code>admin@example.com</code> / <code>123456</code>
                    </p>
                </div>
            </form>
        </div>
    );
}
