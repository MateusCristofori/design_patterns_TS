import { BasicCar } from "../products/interfaces/BasicCar";
import { LuxCar } from "../products/interfaces/LuxCar";
import { CarFactory } from "./interfaces/CarFactory";

export class MainVehicle implements CarFactory {
  createBasicCar(): BasicCar {
    throw new Error("Method not implemented.");
  }
  createLuxCar(): LuxCar {
    throw new Error("Method not implemented.");
  }
}
