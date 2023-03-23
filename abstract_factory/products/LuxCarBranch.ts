import { LuxCar } from "./interfaces/LuxCar";

export class LuxCarBranch implements LuxCar {
  start(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
}
