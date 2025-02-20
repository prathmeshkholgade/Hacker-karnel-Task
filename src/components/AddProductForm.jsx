import React, { useState } from "react";

export default function AddProductForm({ products, setProducts }) {
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
  });
  const addProduct = (e) => {
    e.preventDefault();
    if (!productData.productName || !productData.price) {
      return alert("all fields are required");
    }
    if (
      products.some(
        (product) =>
          product.productName.toLowerCase() ===
          productData.productName.toLowerCase()
      )
    ) {
      return alert("Product already exists.");
    }
    setProducts((prevProduct) => [...prevProduct, productData]);
    setProductData({
      productName: "",
      price: "",
    });
  };
  const inputHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-[90%] h-[320px] sm:w-[50%] md:[40%] mx-auto sm:mx-0 lg:w-[22%] p-8 border  border-gray-300">
      <h1 className="text-xl py-2">Enter Product Details</h1>
      <form onSubmit={addProduct} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={inputHandler}
            id="name"
            placeholder="Enter Product Name "
            className="bg-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={productData.price}
            onChange={inputHandler}
            placeholder="Enter Product Price"
            className="bg-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="w-full flex text-center bg-[#6366f1] rounded-md">
          <button type="submit" className="w-full p-2 text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
