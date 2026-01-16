"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
        router.refresh();
    };

    return (
        <button className="btn btn-sm btn-outline" onClick={logout}>
            Logout
        </button>
    );
}
