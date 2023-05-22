import Link from "../components/Link";

export default function About() {
  return (
    <div>
      <p>About</p>
      <Link href="/">Go to home</Link>
      <p>
        !Hola¡ Soy Agustin Castro y estoy adaptando una implementación de
        Routing en React
      </p>
      <img
        src="https://pbs.twimg.com/profile_images/1119613612983767040/aDhnzfBy_400x400.jpg"
        alt="AgustinCastro"
      />
      <a href="https://www.instagram.com/fcastroagus/?hl=es-la">Instagram</a>
    </div>
  );
}
