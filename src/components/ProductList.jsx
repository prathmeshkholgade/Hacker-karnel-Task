import React from "react";

export default function ProductList({ products, searchQuery, setProducts }) {
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleDelete = (productName) => {
    console.log(productName);
    const updatedProduct = filteredProducts.filter(
      (product) => product.productName != productName
    );
    setProducts(updatedProduct);
    console.log(updatedProduct);
  };
  return (
    <div className="p-4 w-[80%] mx-auto mt-4">
      <h1 className="text-xl font-semibold ">Products</h1>
      {filteredProducts.length === 0 ? (
        <div className="p-4">
          <h2 className="text-lg">No Product Found</h2>
        </div>
      ) : (
        filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="flex justify-between gap-8 py-2 border-b-1 border-gray-400"
          >
            <h2 key={idx}>{product.productName}</h2>
            <p>Price: &#8377;{product.price}</p>
            <p>
              {" "}
              <i
                onClick={() => handleDelete(product.productName)}
                className="ri-close-line bg-red-400 p-1 rounded-lg text-white "
              ></i>{" "}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
