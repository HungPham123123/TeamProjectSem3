import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PromotionManagement from "@/components/promotion/promotion";

const ReviewsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Promotions</h1>
        <PromotionManagement />  
      </div>
    </DefaultLayout>
  );
};

export default ReviewsPage;
