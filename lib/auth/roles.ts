export type AuthRole = "user" | "admin" | "super-admin";

export const ROLE_HOME: Record<AuthRole, string> = {
  user: "/user-dashboard/dashboard",
  admin: "/admin/dashboard",
  "super-admin": "/super-admin/dashboard",
};

export const ROLE_LABEL: Record<AuthRole, string> = {
  user: "Member",
  admin: "Admin",
  "super-admin": "Super Admin",
};

export function normalizeRole(role: string | null | undefined): AuthRole | null {
  if (role === "user" || role === "admin" || role === "super-admin") return role;
  if (role === "super_admin") return "super-admin";
  return null;
}

export function getHomeForRole(role: string | null | undefined) {
  const normalized = normalizeRole(role);
  return normalized ? ROLE_HOME[normalized] : "/";
}
