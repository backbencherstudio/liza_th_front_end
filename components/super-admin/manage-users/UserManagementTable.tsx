"use client";

import { useState } from "react";
import DataTable, { Column } from "@/components/reusable/DataTable";
import TableToolBar from "@/components/reusable/TableToolBar";

import ActionMenu, { MenuAction } from "@/components/reusable/ActionMenu";
import CustomModal from "@/components/reusable/CustomModal";
import UserDetails from "./UserDetails";
import ActionIcons from "@/components/icons/ActionIcons";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  industry: string;
  plan: string;
  joinDate: string;
  status: "Active" | "Suspended";
}

const mockUsers: UserData[] = [
  { id: "1", name: "John Doe", email: "iva838@outlook.com", role: "Financial Advisor", industry: "Finance & Banking", plan: "Pro Plan (Monthly)", joinDate: "1/15/2024", status: "Active" },
  { id: "2", name: "Jane Smith", email: "b.b.lawlor@outlook.com", role: "Product Manager", industry: "Marketing", plan: "Premium (Monthly)", joinDate: "2/20/2024", status: "Active" },
  { id: "3", name: "Bob Johnson", email: "f.j.swann@aol.com", role: "Accountant", industry: "Transportation", plan: "Pro Plan (Yearly)", joinDate: "3/10/2024", status: "Suspended" },
  { id: "4", name: "Alice Williams", email: "autumn_philips@aol.com", role: "Analyst", industry: "Technology", plan: "Pro Plan (Yearly)", joinDate: "1/5/2024", status: "Active" },
  { id: "5", name: "Charlie Brown", email: "rodger913@aol.com", role: "Analyst", industry: "Media & Entertain...", plan: "Premium (Yearly)", joinDate: "4/1/2024", status: "Active" },
  { id: "6", name: "Courtney Henry", email: "david291@gmail.com", role: "Sales & RevOps", industry: "E-commerce", plan: "Pro Plan (Monthly)", joinDate: "1/5/2024", status: "Active" },
];

export default function UserManagementTable() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] =
    useState<UserData | null>(null);

  const columns: Column<UserData>[] = [
    { header: "Users Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Industry", accessor: "industry" },
    { header: "Plan", accessor: "plan" },
    { header: "Join Date", accessor: "joinDate" },
    {
      header: "Status",
      cell: (row) => {
        const isActive = row.status === "Active";
        return (
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${isActive
                ? "bg-[#E6F4EA] text-[#137333]"
                : "bg-[#FCE8E6] text-[#C5221F]"
              }`}
          >
            {row.status}
          </span>
        );
      },
    },
    {
      header: "Actions",
      cell: (row) => {
        const rowActions: MenuAction[] = [

          {
            label: "Active",
            icon: ActionIcons.Active,
            onClick: () => console.log("Editing user:", row.id),
          },
          {
            label: "Suspend User",
            icon: ActionIcons.Suspend,
            onClick: () => console.log("Suspending user:", row.id),
          },

          {
            label: "View Details",
            icon: ActionIcons.View,
            onClick: () =>{
              setViewOpen(true);
              setSelectedUser(row);
            },
          },
         
        ];
        return <ActionMenu actions={rowActions}  />;
      },
    },
  ];

  const filteredData = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6 rounded-2xl border border-[#EDEDED] p-4 sm:p-6">
      <TableToolBar
        searchPlaceholder="Search by name or email..."
        onSearchChange={setSearch}
      >
        <select className="sf-select">
          <option>All Role</option>
        </select>
        <select className="sf-select">
          <option>All Subscriptions</option>
          <option>Pro Plan (Monthly)</option>
          <option>Premium (Monthly)</option>
          <option>Pro Plan (Yearly)</option>
          <option>Premium (Yearly)</option>
        </select>
        <select className="sf-select">
          <option>All Status</option>
        </select>
      </TableToolBar>

      <div className="mt-8">
        <DataTable
          columns={columns}
          data={filteredData}
          idKey="id"
          selectedId={selectedId}
          onSelectionChange={setSelectedId}
          pageSize={10}
        />
      </div>



      <CustomModal
        open={viewOpen}
        onOpenChange={setViewOpen}
        showCloseButton={false}
        size="md"
        className=""
      >
        {selectedUser && (
          <UserDetails
            user={selectedUser}
            onClose={() => setViewOpen(false)}
          />
        )}
      </CustomModal>

      {/* <CustomModal
                open={editOpen}
                onOpenChange={setEditOpen}
                title="Edit Subscription Plan"
                size="md"
            >
                {editablePlan && (
                    <SubscriptionForm
                        key={selectedSubscription?.id}
                        plan={editablePlan}
                        onSuccess={() => setEditOpen(false)}
                    />
                )}
            </CustomModal> */}
    </div>
  );
}