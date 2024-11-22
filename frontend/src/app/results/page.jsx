"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "@/utils/axios";

function SearchResult() {
    const searchParams = useSearchParams(); // Access search parameters from the URL
    const search = searchParams.get("query");
    const category = searchParams.get("category");
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFilteredItems = async () => {
        if (!search) return;

        setLoading(true);

        try {
            let endpoint = '';
            switch (category) {
                case "Albums":
                    endpoint = "/api/Filter/albums/search";
                    break;
                case "Movies":
                    endpoint = "/api/Filter/movies/search";
                    break;
                case "Games":
                    endpoint = "/api/Filter/games/search";
                    break;
                default:
                    endpoint = "/api/Filter/products/search";
            }

            const response = await axios.get(endpoint, {
                params: { searchterm: search },
            });

            setFilteredItems(response.data);
        } catch (error) {
            console.error("Error fetching filtered items:", error);
            setFilteredItems([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFilteredItems();
    }, [search, category]);

    return (
        <div>
            <h1 className="text-center text-2xl font-medium mb-8">
                Results for "<span className="font-bold">{search}</span>" in category "<span className="font-bold">{category}</span>"
            </h1>
            <div className="tab-contents w-full min-h-[400px] px-4 md:px-8 2xl:px-52 flex items-center justify-center">
  <div className="container-x mx-auto flex justify-center w-full">
    <div className="flex flex-wrap gap-4 justify-center w-full">
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.productId}`}
            className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
            role="button"
            title={item.title}
          >
            <div className="flex mb-3 md:mb-3.5">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt="123"
                  src={item.image1}
                  className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
            </div>
            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
              <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                {item.title}
              </h2>
              <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-full truncate">
                {item.description}
              </p>
              <div className="font-semibold text-sm sm:text-base mt-1.5 text-heading">
                <span>${item.price}</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center text-lg">No results found.</p>
      )}
    </div>
  </div>
</div>

        </div>
    );
}

export default SearchResult;
