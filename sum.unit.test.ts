import { expect, test } from "vitest";
import { sum } from "./src";

test("1+2の結果は3である", () => {
    expect(sum(1, 2)).toBe(3);
});