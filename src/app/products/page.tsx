import ProductCard from "@/app/components/ProductCard/ProductCard";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await fetch("https://fakestoreapi.com/products", {}).then(
    (res) => res.json()
  );

  return (
    <section>
      <h2>Products</h2>
      <Link href="/products/add">Add Product</Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        {products.map(
          (product: { id: number; title: string; price: number }) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
            />
          )
        )}
      </div>
    </section>
  );
}
