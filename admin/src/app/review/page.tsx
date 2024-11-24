import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Reviews from "@/components/review/review";

const ReviewsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Reviews</h1>
        <Reviews />  
      </div>
    </DefaultLayout>
  );
};

export default ReviewsPage;
