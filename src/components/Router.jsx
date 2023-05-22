// native
import { useEffect, useState } from "react";
import { array } from "prop-types";

// modules
import { match } from "path-to-regexp";

// config
import { EVENTS } from "../const";

// components
import NotFound from "../pages/NotFound";

export default function Router({ routes }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // para escuchar el evento
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    // y retornar una desubscripcion
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};
  let queryParams = {};

  const Page = routes.find(({ path }) => {
    window.location.search;
    if (window.location.search) {
      const formattedSearch = window.location.search
        .replace("?", "")
        .split("&");
      for (const search of formattedSearch) {
        search.split("=")
        const [key, value] = search.split("=");
        queryParams[key] = value;
      }
    }
    if (path === currentPath) return true;

    // se usa path-to-regexp
    // para detectar rutas dinamicas y acceder a sus valores
    // eg => /search?query=rick

    const matcherUrl = match(
      path,
      { decode: decodeURIComponent },
      { sensitive: true }
    );
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} queryParams={queryParams} />
  ) : (
    <NotFound routeParams={routeParams} queryParams={queryParams} />
  );
}

Router.propTypes = {
  routes: array,
};

Router.defaultProps = {
  routes: [],
};
