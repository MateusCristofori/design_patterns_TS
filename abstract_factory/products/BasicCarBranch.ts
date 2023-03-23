import { BasicCar } from "./interfaces/BasicCar";

export class BasicCarBranch implements BasicCar {
  start(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
}
