// src/app/orders/page.tsx

import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableOrders from "@/components/TableOrders/TableOrders";

const OrdersPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Orders</h1>
        <TableOrders />  {/* Component TableOrders */}
      </div>
    </DefaultLayout>
  );
};

export default OrdersPage;
