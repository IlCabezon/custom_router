// native
import { useState } from "react";
import { object } from "prop-types";

// components
import Link, { navigate } from "../components/Link";

export default function Search({ queryParams }) {
  const { query } = queryParams;

  const [search, setSearch] = useState("");

  function onSearch(event) {
    event.preventDefault();

    const formattedUrl = `/search?${search}`;
    navigate(formattedUrl);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Buscador</h1>
      <form onSubmit={onSearch}>
        <input
          type="text"
          name="query"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {query}
      <br />
      <Link href="/">Go to home</Link>
    </div>
  );
}

Search.propTypes = {
  queryParams: object,
};

Search.defaultProps = {
  queryParams: {
    query: "",
  },
};
