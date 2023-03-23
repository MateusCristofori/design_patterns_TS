import { MealCompositeProtocol } from "../interface/meal-composite-protocol";

// Essa classe será o composite. Ela irá ter todos os produtos compostos dentro de si por composição. Vamos precisar herdar de MealCompositeProtocol.
// Não iremos precisar de construtor, apenas de "getPrice()".
export class MealBox implements MealCompositeProtocol {
  // Vamos pegar o preço de todas as refeições realizando um "for" para essa variável que será um array.
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    // Vamos ter o preço de todos os elementos do array através desse método. É importante estudar mais sobre métodos de Array, como o reducer por exemplo.
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  // Podemos enviar mais de uma refeição por vez ao invés de precisar chamar o método de forma unitária.
  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
