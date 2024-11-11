// src/types/order.ts
export interface Order {
    orderId: number;
    userId: number;
    orderDate: string;
    totalAmount: number;
    status: string;
    deliveryDate: string;
  }