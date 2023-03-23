import { BasicCar } from "../../products/interfaces/BasicCar";
import { LuxCar } from "../../products/interfaces/LuxCar";

export interface CarFactory {
  createBasicCar(): BasicCar;
  createLuxCar(): LuxCar;
}
