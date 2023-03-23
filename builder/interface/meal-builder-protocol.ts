// Interface para lidar com builder sem composite. Funciona da mesma forma que a outra interface. Iremos ter o métodos que serão implementados.
export interface MealBuilderProtocol {
  makeMeal(): this;
  // Bebida
  makeBeverage(): this;
  // Sobremesa
  makeDessert(): this;
}

// OBS: Retornos do tipo "this" retornam a própria instância da classe e nos permite encadear vários métodos de uma vez. Ex: const pessoa = new Pessoa() -> pessoa.setNome().setIdade().setProfissao().
// Esses métodos retornam o "this" que nos permite realizar esse tipo de ação.
