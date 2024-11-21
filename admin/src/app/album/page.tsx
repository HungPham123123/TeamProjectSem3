import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Albums from "@/components/Album/album";

const ArtistsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Albums</h1>
        <Albums />  
      </div>
    </DefaultLayout>
  );
};

export default ArtistsPage;
