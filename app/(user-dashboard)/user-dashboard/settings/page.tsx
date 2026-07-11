import { redirect } from "next/navigation";

import React from 'react'

export default function page() {
  redirect('/super-admin/settings/edit-profile');
}
