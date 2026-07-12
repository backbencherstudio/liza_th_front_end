import RolePermision from "@/components/super-admin/manage-role/RolePermision";
import { Suspense } from "react";

export default function ManageRolePage() {
  return (
    <Suspense fallback={null}>
      <RolePermision />
    </Suspense>
  );
}

