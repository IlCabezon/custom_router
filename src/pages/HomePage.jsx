import Link from "../components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">Go to about</Link>
      <br />
      <Link href="/search">Go to Search</Link>
    </div>
  );
}
