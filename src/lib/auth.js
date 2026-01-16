import { cookies } from "next/headers";

export const AUTH_COOKIE = "mock_auth";
export const EMAIL_COOKIE = "mock_email";

export function isLoggedInServer() {
    const c = cookies();
    return c.get(AUTH_COOKIE)?.value === "1";
}

export function getEmailServer() {
    const c = cookies();
    return c.get(EMAIL_COOKIE)?.value || "";
}
