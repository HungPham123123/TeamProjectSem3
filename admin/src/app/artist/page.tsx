import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Artists from "@/components/Artist/artist";

const ArtistsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 className="text-2xl font-bold text-center my-6">Manage Artists</h1>
        <Artists />  
      </div>
    </DefaultLayout>
  );
};

export default ArtistsPage;
