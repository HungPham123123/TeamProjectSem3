

import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Category from "@/components/category/category";

const CategoryPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Category</h1>
        <Category />  
      </div>
    </DefaultLayout>
  );
};

export default CategoryPage;
