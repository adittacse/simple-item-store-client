import { cookies } from "next/headers";

export const AUTH_COOKIE = "mock_auth";
export const EMAIL_COOKIE = "mock_email";

export async function isLoggedInServer() {
    const c = await cookies();
    return c.get(AUTH_COOKIE)?.value === "1";
}

export async function getEmailServer() {
    const c = await cookies();
    return c.get(EMAIL_COOKIE)?.value || "";
}
