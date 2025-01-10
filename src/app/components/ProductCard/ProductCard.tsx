import Link from "next/link";

export default function ProductCard({
  id,
  title,
  price,
}: {
  id: number;
  title: string;
  price: number;
}) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
    >
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <Link href={`/products/${id}`}>View Details</Link>
    </div>
  );
}
