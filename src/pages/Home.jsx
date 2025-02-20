import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="p-2 ml-4 mt-4 flex">
        <AddProductForm products={products} setProducts={setProducts} />
        <div className="flex-grow ">
          <ProductList
            products={products}
            searchQuery={searchQuery}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

