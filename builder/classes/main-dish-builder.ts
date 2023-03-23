import { MealBuilderProtocol } from "../interface/meal-builder-protocol";
import { MealBox } from "./mealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  // ? É recomendado instanciar uma dependência diretamente dentro da classe dependente?
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 20);
    this._meal.add(rice, beans, meat);
    // Vamos precisar retornar o "this" para realizar o "Method chaining" (encadeamento de métodos).
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 10);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Sobremesa", 20);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
