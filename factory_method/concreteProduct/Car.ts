import { IVehicle } from "../IVehicle";

export class Car implements IVehicle {
  start(): void {
    console.log("[carro] Iniciando.");
  }
}
