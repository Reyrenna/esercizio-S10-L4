import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("testing welcome message", () => {
  it("should mont at the rendering of the page", () => {
    render(<Welcome />);
    const h1 = screen.findByText("benvenuti in epiBooks!");
    expect(h1).toBeInTheDocument();
  });
});
