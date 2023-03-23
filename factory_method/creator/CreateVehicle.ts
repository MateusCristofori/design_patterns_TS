import { IVehicle } from "../IVehicle";

// Ao invés de usarmos uma interface com um método de criação, podemos usar uma classe e implementar a lógica diretamente dentro dessa classe tornando as subclasses desnecessárias.
// Porém, isso pode depender muito do contexto em que esse pattern é usado.
export interface CreateVehicle {
  createVehicle(): IVehicle;
}
