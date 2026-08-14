// B01T-666AX — clean-room arena-shooter. Deterministic by construction.
// Inspiration (mechanics only, not source material): arena combat conventions (twin-stick, waves, upgrades)
// Target engine for the render layer: webgl (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { ArenaBounds, TwinStick, UpgradeTree } from "./archetype";

export const SPEC = "arena combat conventions (twin-stick, waves, upgrades)";
export const MODULES = [{ id: "ArenaBounds", name: "B01T-666AX :: ArenaBounds" }, { id: "TwinStick", name: "B01T-666AX :: TwinStick" }, { id: "UpgradeTree", name: "B01T-666AX :: UpgradeTree" }];
export { seededRandom };
