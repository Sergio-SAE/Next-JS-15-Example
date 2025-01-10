import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <h2>About Us</h2>
      <p>We build advanced projects with Next.js!</p>
      <Image src="/logo.svg" alt="Logo" width={200} height={200} />
    </section>
  );
}
