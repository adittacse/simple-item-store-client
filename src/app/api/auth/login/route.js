import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();

    const MOCK_EMAIL = process.env.MOCK_EMAIL || "admin@example.com";
    const MOCK_PASSWORD = process.env.MOCK_PASSWORD || "123456";

    if (email !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });

    // store in cookies (mock)
    res.cookies.set("mock_auth", "1", {
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
    });

    res.cookies.set("mock_email", email, {
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
    });

    return res;
}
