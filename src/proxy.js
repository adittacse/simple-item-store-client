import { NextResponse } from "next/server";

export function proxy(req) {
    const auth = req.cookies.get("mock_auth")?.value;

    // protect only /items/add
    if (req.nextUrl.pathname.startsWith("/items/add")) {
        if (auth !== "1") {
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            url.searchParams.set("next", "/items/add");
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/items/add/:path*"],
};
