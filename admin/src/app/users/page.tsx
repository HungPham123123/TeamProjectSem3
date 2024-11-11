// src/app/orders/page.tsx

import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Users from "@/components/Users/Users";

const UsersPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Users</h1>
        <Users />  
      </div>
    </DefaultLayout>
  );
};

export default UsersPage;
