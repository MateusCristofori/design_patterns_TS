import { Car } from "../../concreteProduct/Car";
import { IVehicle } from "../../IVehicle";
import { CreateVehicle } from "../CreateVehicle";

export class CreateCar implements CreateVehicle {
  createVehicle(): IVehicle {
    return new Car();
  }
}
