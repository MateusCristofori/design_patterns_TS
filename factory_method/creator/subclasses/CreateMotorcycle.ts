import { Motorcycle } from "../../concreteProduct/Motorcycle";
import { IVehicle } from "../../IVehicle";
import { CreateVehicle } from "../CreateVehicle";

export class CreateMotorcycle implements CreateVehicle {
  createVehicle(): IVehicle {
    return new Motorcycle();
  }
}
