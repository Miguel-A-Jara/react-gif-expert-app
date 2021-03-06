import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(1);

    return (
        <>
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-7xl font-semibold text-sky-400 hover:text-sky-300 bg-stone-900 text-center py-5">
                GifExpertApp
            </h1>
            <AddCategory setCategories={setCategories} setLimit={setLimit} limit={limit}/>

            <ol className="bg-stone-900">
                {categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                        categories={categories}
                        setCategories={setCategories}
                        limit={limit}
                    />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
