import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { ArenaBounds, TwinStick, UpgradeTree } from "../src/archetype";

describe("B01T-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(3);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const a = new ArenaBounds(20, 20);
expect(a.clamp(25, -3)).toEqual([19, 0]);
const ts = new TwinStick();
expect(ts.move(10, 10, 1, 0)).toEqual([11, 10]);
const ut = new UpgradeTree();
expect(ut.buy("dmg", (l) => 5 * (l + 1), 4)).toBe(false);
expect(ut.buy("dmg", (l) => 5 * (l + 1), 5)).toBe(true);
expect(ut.level("dmg")).toBe(1);
  });
});
