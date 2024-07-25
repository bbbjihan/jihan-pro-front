import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TestPage from "../src/app/testpage/page";

describe("샘플 테스트", () => {
  test("렌더링 테스트", () => {
    render(<TestPage />);
    const $page = screen.getByTestId("test_div");

    expect($page.innerHTML.indexOf("TestPage")).toBe(-1);
  });
});
