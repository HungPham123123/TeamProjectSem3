import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NewsList from "@/components/news/news";

const NewsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage News</h1>
        <NewsList />  
      </div>
    </DefaultLayout>
  );
};

export default NewsPage;
