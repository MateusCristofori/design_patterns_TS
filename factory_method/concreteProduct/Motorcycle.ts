import { IVehicle } from "../IVehicle";

export class Motorcycle implements IVehicle {
  start(): void {
    console.log("[Moto] Iniciando.");
  }
}
