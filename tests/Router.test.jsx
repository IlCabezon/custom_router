// modules
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

// components
import Router from "../src/components/Router";
import Route from "../src/components/Route";
import HomePage from "../src/pages/HomePage";

// utils
import { getCurrentPath } from "../src/utils/path";
import Link from "../src/components/Link";
import About from "../src/pages/About";

vi.mock("../src/utils/path.js", () => ({
  getCurrentPath: vi.fn(),
}));

// para debug screen.debug()

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("Should render without problems", () => {
    render(<Router />);
    expect(true).toBeTruthy();
  });

  it("Should render 404 if no routes match", () => {
    render(<Router DefaultComponent={() => <h1>error</h1>} />);
    expect(screen.getByText("error")).toBeTruthy();
  });

  it("Should render the component of the first route that matches", () => {
    getCurrentPath.mockReturnValue("/");

    render(
      <Router>
        <Route path="/" Component={HomePage} />
      </Router>
    );
    expect(screen.getByText("Home")).toBeTruthy();
  });

  it("Should render the 404 component if the route doesn't match", () => {
    getCurrentPath.mockReturnValue("/about");

    render(
      <Router>
        <Route path="/" Component={HomePage} />
      </Router>
    );
    expect(screen.getByText("Not Found")).toBeTruthy();
  });

  it("should navigate using Links", async () => {
    getCurrentPath.mockReturnValueOnce("/");

    render(
      <Router>
        <Route
          path="/"
          Component={() => {
            return (
              <>
                <h1>Go to About</h1>
                <Link href="/about">about</Link>
              </>
            );
          }}
        />
        <Route path="/about" Component={About} />
      </Router>
    );
    // ver que la nueva ruta es about
    const button = screen.getByText(/about/)
    fireEvent.click(button)

    const aboutTitle = await screen.findByText(/Agustin/)
    expect(aboutTitle).toBeTruthy()    
  });
});
