import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Updated categories
const categories = ["Movies", "Games", "Songs", "Products", "Artist"];

function Search({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Gọi API khi category thay đổi
    useEffect(() => {
        const fetchItems = async () => {
            if (!selectedCategory) return;

            try {
                setLoading(true);
                const response = await axios.get(`https://localhost:7071/api/${selectedCategory}`);
                setItems(response.data);
            } catch (error) {
                console.error(`Error fetching ${selectedCategory} data:`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [selectedCategory]);

    // Lọc kết quả theo searchQuery
    const filteredItems = items.filter(item =>
        (item.name?.toLowerCase().includes(searchQuery.toLowerCase()) || item.title?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30 cursor-pointer" onClick={onClose}></div>
            <div className="drawer-search fixed top-0 z-30 left-1/4 px-4 w-full md:w-[730px] lg:w-[930px]">
                <div className="flex flex-col justify-center w-full">
                    <form className="relative bg-white overflow-hidden rounded-md w-full" noValidate role="search">
                        <label htmlFor="category" className="flex items-center">
                            <select
                                id="category"
                                className="h-12 text-sm placeholder-gray-400 outline-none text-heading lg:h-14 lg:text-base  bg-gray-100 border-r border-gray-300"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Select a category</option>
                                {categories.map(category => (
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
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-6 h-6" height="1em" width="1em">
                                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144m224 0L144 368" />
                            </svg>
                        </button>
                    </form>

                    {loading ? (
                        <p className="p-5 text-sm text-gray-400">Loading...</p>
                    ) : searchQuery && filteredItems.length > 0 ? (
                        <div className="bg-white flex flex-col rounded-md overflow-y-auto max-h-64vh lg:max-h-[550px]">
                            {filteredItems.map(item => {
                            switch (item.type) {
                                case 'Products':
                                    return (
                                        <div key={item.id} className="p-5 border-b">
                                            <Link className="flex items-center group" href={`/products/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                                <img src={item.image} alt={item.name} className="w-24 h-24 bg-gray-200 rounded-md mr-4" />
                                                <div className="flex flex-col">
                                                    <h3 className="text-sm truncate">{item.title}</h3>
                                                    <span className="text-sm font-semibold">${item.price}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    );

                                case 'Movies':
                                    return (
                                        <div key={item.id} className="p-5 border-b">
                                            <Link className="flex items-center group" href={`/movies/${item.id}`}>
                                                <img src={item.poster} alt={item.title} className="w-24 h-24 bg-gray-200 rounded-md mr-4" />
                                                <div className="flex flex-col">
                                                    <h3 className="text-sm truncate">{item.title}</h3>
                                                    <span className="text-sm text-gray-500">{item.genre}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    );

                                case 'Songs':
                                    return (
                                        <div key={item.id} className="p-5 border-b">
                                            <Link href={`/songs/${item.id}`} className="flex items-center">
                                                <div className="flex flex-col">
                                                    <h3 className="text-sm truncate">{item.title}</h3>
                                                    <p className="text-sm text-gray-500">{item.artistName}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    );

                                case 'Artist':
                                    return (
                                        <div key={item.id} className="p-5 border-b">
                                            <Link href={`/artists/${item.id}`} className="flex items-center">
                                                <h3 className="text-sm truncate">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.biography}</p>
                                            </Link>
                                        </div>
                                    );

                                case 'Games':
                                    return (
                                        <div key={item.id} className="p-5 border-b">
                                            <Link href={`/games/${item.id}`} className="flex items-center">
                                                <div className="flex flex-col">
                                                    <h3 className="text-sm truncate">{item.title}</h3>
                                                    <span className="text-sm font-semibold">{item.platform}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    );

                                default:
                                    return (
                                        <div key={item.id} className="p-5 border-b">
                                            <h3 className="text-sm font-semibold">{item.name || item.title || 'Unknown'}</h3>
                                            <p className="text-sm text-gray-500 truncate">{item.description}</p>
                                        </div>
                                    );
                            }
                            })}
                        </div>
                    ) : (
                        <p className="p-5 text-sm font-semibold bg-white">No items found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
