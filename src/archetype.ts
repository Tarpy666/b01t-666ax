export class ArenaBounds {
  constructor(public readonly w = 20, public readonly h = 20) {}
  clamp(x: number, y: number): [number, number] {
    return [Math.max(0, Math.min(this.w - 1, x)), Math.max(0, Math.min(this.h - 1, y))];
  }
}
export class TwinStick {
  move(x: number, y: number, dx: number, dy: number, speed = 1): [number, number] {
    const len = Math.hypot(dx, dy) || 1;
    return [x + (dx / len) * speed, y + (dy / len) * speed];
  }
}
export class UpgradeTree {
  private up = new Map<string, number>();
  level(k: string): number { return this.up.get(k) ?? 0; }
  buy(k: string, cost: (l: number) => number, funds: number): boolean {
    const l = this.level(k);
    const c = cost(l);
    if (funds < c) return false;
    this.up.set(k, l + 1);
    return true;
  }
}