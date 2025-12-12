import { describe, it, expect } from "vitest";
import { formatMoney } from "./Money";

describe("test for MoneyConverter function", () => {
  it("formats 1999 cents as $19.99", () => {
    expect(formatMoney(1999)).toBe("$19.99");
  });

  it("displays two decimals", () => {
    expect(formatMoney(1000)).toBe("$10.00");
    expect(formatMoney(1220)).toBe("$12.20");
  });
});
