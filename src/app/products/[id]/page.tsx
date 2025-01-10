export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return products.map((product: { id: string }) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section>
      <h2>Product ID: {id}</h2>
    </section>
  );
}
