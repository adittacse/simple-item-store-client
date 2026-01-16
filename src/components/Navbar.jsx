import Link from "next/link";
import { getEmailServer, isLoggedInServer } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
    const loggedIn = await isLoggedInServer();
    const email = await getEmailServer();

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-xl">SimpleStore</Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/items">Items</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    {
                        loggedIn ? <li><Link href="/items/add">Add Item</Link></li> : null
                    }
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {loggedIn ? (
                    <>
                        <span className="hidden sm:inline text-sm opacity-70">{email}</span>
                        <LogoutButton />
                    </>
                ) : (
                    <Link href="/login" className="btn btn-sm btn-outline">Login</Link>
                )}
            </div>
        </div>
    );
}
