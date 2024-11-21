import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Producers from "@/components/producer/producer";

const ArtistsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Producers</h1>
        <Producers />  
      </div>
    </DefaultLayout>
  );
};

export default ArtistsPage;
