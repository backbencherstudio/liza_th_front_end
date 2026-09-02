import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PREFIXES = ["/user-dashboard", "/admin", "/super-admin"];

const SESSION_COOKIES = ["spike_refresh_token", "refresh_token"];

function hasRefreshCookie(request: NextRequest) {
  return SESSION_COOKIES.some((name) => request.cookies.has(name));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isProtected && !hasRefreshCookie(request)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user-dashboard/:path*", "/admin/:path*", "/super-admin/:path*"],
};
