import { type NextRequest, NextResponse } from "next/server";

const API_TARGET = (process.env.BACKEND_URL ?? "").replace(/\/$/, "");

const HOP_BY_HOP = new Set([
  "connection",
  "content-length",
  "host",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

function rewriteSetCookie(cookie: string) {
  return `${cookie
    .replace(/;\s*Domain=[^;]*/gi, "")
    .replace(/;\s*SameSite=[^;]*/gi, "")
    .replace(/;\s*Secure/gi, "")
    .replace(/;\s*Path=[^;]*/gi, "")}; Path=/; SameSite=Lax`;
}

async function proxy(request: NextRequest, path: string[]) {
  if (!API_TARGET) {
    return NextResponse.json(
      { detail: "BACKEND_URL is not configured." },
      { status: 500 }
    );
  }

  const target = `${API_TARGET}/${path.join("/")}${request.nextUrl.search}`;
  const headers = new Headers();

  request.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  headers.set("ngrok-skip-browser-warning", "true");
  headers.delete("origin");
  headers.delete("accept-encoding");

  const body =
    request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.arrayBuffer();

  const upstream = await fetch(target, {
    method: request.method,
    headers,
    body,
    redirect: "manual",
  });

  const responseHeaders = new Headers();
  upstream.headers.forEach((value, key) => {
    if (HOP_BY_HOP.has(key.toLowerCase()) || key.toLowerCase() === "set-cookie") {
      return;
    }
    responseHeaders.append(key, value);
  });

  for (const cookie of upstream.headers.getSetCookie()) {
    responseHeaders.append("Set-Cookie", rewriteSetCookie(cookie));
  }

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

type RouteContext = { params: Promise<{ path: string[] }> };

export async function GET(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path);
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path);
}
