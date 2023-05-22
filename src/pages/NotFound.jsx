import Link from "../components/Link";

export default function NotFound() {
  return (
    <div>
      <p>ERROR 404</p>
      <p>Not Found</p>
      <img src="https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg" alt="notfound" />
      <Link href="/">Go to home</Link>
    </div>
  );
}
