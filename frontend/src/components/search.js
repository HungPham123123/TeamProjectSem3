import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "@/utils/axios"; // Import useRouter for redirection
import { useRouter } from 'next/navigation';
function Search({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter(); // Initialize the useRouter hook

    const categories = ['All', 'Albums', 'Movies', 'Games'];

    const fetchFilteredItems = async () => {
        if (!searchQuery.trim()) {
            setFilteredItems([]);
            return;
        }

        setLoading(true);
        try {
            let endpoint = '';
            switch (selectedCategory) {
                case 'Albums':
                    endpoint = `/api/Filter/albums/search`;
                    break;
                case 'Movies':
                    endpoint = `/api/Filter/movies/search`;
                    break;
                case 'Games':
                    endpoint = `/api/Filter/games/search`;
                    break;
                default:
                    endpoint = '/api/Filter/products/search';
            }

            if (endpoint) {
                const response = await axios.get(endpoint, {
                    params: { searchterm: searchQuery },
                });
                setFilteredItems(response.data);
            } else {
                setFilteredItems([]);
            }
        } catch (error) {
            console.log('Error fetching filtered items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchFilteredItems();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, selectedCategory]);

    const highlightText = (text, query) => {
        if (!query.trim()) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} className="bg-yellow-300 text-black">{part}</span>
            ) : (
                part
            )
        );
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setSearchQuery(''); // Clear search when category changes
    };

    const handleItemClick = (productId) => {
        onClose(); // Close the search when an item is clicked
        router.push(`/product/${productId}`); // Navigate to the item page
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirect to results page with query and category as parameters
            router.push(`/results?query=${searchQuery}&category=${selectedCategory}`);
            onClose(); // Close the search drawer
        }
    };

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30 cursor-pointer" onClick={onClose}></div>
            <div className="drawer-search fixed top-0 z-30 left-1/4 px-4 w-full md:w-[730px] lg:w-[930px]">
                <div className="flex flex-col justify-center w-full">
                    <form
                        className="relative bg-white overflow-hidden rounded-md w-full"
                        noValidate
                        role="search"
                        onSubmit={handleSubmit} // Handle form submission
                    >
                        <label htmlFor="category" className="flex items-center">
                            <select
                                id="category"
                                className="h-12 text-sm placeholder-gray-400 outline-none text-heading lg:h-14 lg:text-base bg-gray-100 border-r border-gray-300"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <input
                                id="search"
                                className="w-full h-12 text-sm placeholder-gray-400 outline-none text-heading lg:h-14 lg:text-base"
                                placeholder="Search..."
                                aria-label="Search"
                                autoComplete="off"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </label>
                        <button
                            type="button"
                            className="absolute top-0 flex items-center justify-center w-12 h-full text-2xl text-gray-400 transition duration-200 ease-in-out outline-none md:text-3xl right-0 rtl:left-0 md:w-14 hover:text-heading focus:outline-none"
                            onClick={onClose}
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                className="w-6 h-6"
                                height="1em"
                                width="1em"
                            >
                                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144m224 0L144 368" />
                            </svg>
                        </button>
                    </form>

                    {loading ? (
                        <p className="p-5 text-sm text-gray-400">Loading...</p>
                    ) : searchQuery && (
                        <div className="bg-white flex flex-col rounded-md overflow-y-auto max-h-64vh lg:max-h-[550px]">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <div key={item.productId || item.title} className="p-5 border-b">
                                        <div className="flex items-center group" onClick={() => handleItemClick(item.productId)}>
                                            <img src={item.image1} alt={item.title} className="w-24 h-24 bg-gray-200 rounded-md mr-4" />
                                            <div className="flex flex-col">
                                                <h3 className="text-sm truncate">
                                                    {highlightText(item.title, searchQuery)}
                                                </h3>
                                                <span className="text-sm font-semibold">${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="p-5 text-sm text-gray-400">No items found.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
