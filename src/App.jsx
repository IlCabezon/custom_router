// styles
import "./App.css";

// native
import { lazy, Suspense } from "react";

// components
import Route from "./components/Route";
import Router from "./components/Router";

const About = lazy(() => import("./pages/About"));
const Search = lazy(() => import("./pages/Search"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <main>
      <Suspense fallback={<p>cargando</p>}>
        <Router>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/search" Component={Search} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
