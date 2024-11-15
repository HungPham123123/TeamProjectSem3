import Link from 'next/link';
import { useState } from 'react';

// Demo data including products and information items
const demoItems = [
    { id: 1, type: 'product', category: "movie dvd", name: "Inception DVD", price: 9.99, image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1731036293/album1_a15ftu.jpg" },
    { id: 2, type: 'product', category: "game dvd", name: "FIFA 21 DVD", price: 19.99, image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1731036293/album1_a15ftu.jpg" },
    { id: 3, type: 'product', category: "album dvd", name: "Adele - 25 DVD", price: 12.99, image: "https://res.cloudinary.com/dklnlcse3/image/upload/v1731036758/dvds-1_fcxolr.jpg" },
    { id: 4, type: 'info', category: "news", title: "Latest DVD Releases", description: "Check out the latest movie releases and find your next favorite." },
    { id: 5, type: 'info', category: "artist", title: "Adele's New Album", description: "The long-awaited album from Adele is finally here with new songs." },
    { id: 6, type: 'info', category: "actor", title: "Tom Hanks Filmography", description: "Explore the career and movies of legendary actor Tom Hanks." }
];

// Updated categories
const categories = ["All", "movie dvd", "game dvd", "album dvd", "news", "artist", "actor"];

function Search({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter based on category and search query
    const filteredItems = demoItems.filter(item =>
        (item.type === 'product' || item.type === 'info') &&
        (selectedCategory === 'All' || item.category === selectedCategory) &&
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
                                        {categories.map(category => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="flex items-center justify-center flex-shrink-0 w-12 h-full cursor-pointer md:w-14 focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17px"
                                            height="18px"
                                            viewBox="0 0 18.942 20"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                                                transform="translate(-367.297 -371.285)"
                                                fill="text-heading"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </span>
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

                            {searchQuery && (
    <div className="bg-white flex flex-col rounded-md overflow-y-auto max-h-64vh lg:max-h-[550px]">
        {filteredItems.length > 0 ? (
            filteredItems.map(item => (
                item.type === 'product' ? (
                    <div key={item.id} className="p-5 border-b">
                        <Link className="flex items-center group" href={`/products/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                            <img src={item.image} alt={item.name} className="w-24 h-24 bg-gray-200 rounded-md mr-4" />
                            <div className="flex flex-col">
                                <h3 className="text-sm truncate">{item.name}</h3>
                                <span className="text-sm font-semibold">${item.price}</span>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <Link href="/12312" className="flex flex-col">
                    <div key={item.id} className="p-5 border-b">
                            <h3 className="text-sm font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500 truncate">{item.description}</p>
                    </div>
                    </Link>
                )
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
