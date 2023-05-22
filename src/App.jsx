// styles
import "./App.css";

// components
import Router from "./components/Router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Search from "./pages/Search";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/search",
    Component: Search,
  },
];

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  );
}

export default App;
