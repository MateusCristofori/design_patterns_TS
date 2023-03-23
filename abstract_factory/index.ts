import { BranchVehicle } from "./factories/BranchVehicle";
import { MainVehicle } from "./factories/MainVehicle";

const branchVehicle = new BranchVehicle();
const mainVehicle = new MainVehicle();
// Criação de carros de luxo.
const branchLuxCar = branchVehicle.createLuxCar();
const mainLuxCar = mainVehicle.createLuxCar();
// Criação de carros básicos.
const branchBasicCar = branchVehicle.createBasicCar();
const mainBasicCar = mainVehicle.createBasicCar();
