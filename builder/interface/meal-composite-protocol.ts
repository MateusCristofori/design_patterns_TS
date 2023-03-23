// Vamos criar o contrato da refeição. Aparentemente é a abstração do "produto". Essa interface, assim como todas as outras, irá possui um método que será implementado nas classes que a implementarem.
// Interface responsável por lidar com builder em uma relação de composite.
export interface MealCompositeProtocol {
  getPrice(): number;
}
