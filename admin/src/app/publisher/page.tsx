import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Publishers from "@/components/publisher/publisher";

const ArtistsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Publisher</h1>
        <Publishers />  
      </div>
    </DefaultLayout>
  );
};

export default ArtistsPage;
