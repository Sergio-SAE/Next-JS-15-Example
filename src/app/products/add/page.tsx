"use client";

import { useState } from "react";
import { addProduct } from "../actions";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addProduct({ name, price: parseFloat(price) });
      setName("");
      setPrice("");
      setMessage("Product added successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Failed to add product: ${error.message}`);
      } else {
        setMessage("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            disabled={isLoading}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          Add Product
        </button>
      </form>
      {isLoading ? <div>Loading...</div> : <p>{message}</p>}
    </div>
  );
}
