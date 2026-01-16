import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("mock_auth", "", { path: "/", maxAge: 0 });
    res.cookies.set("mock_email", "", { path: "/", maxAge: 0 });
    return res;
}
