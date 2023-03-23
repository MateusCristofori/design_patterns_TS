export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {}

  // Método responsável por criar, ou não, uma nova instância do Singleton.
  static get instance(): Singleton {
    // Sempre use a referência da classe (Singleton) ao invés da referência da instância (this). Pois a instância pode ser nula!
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}

// Criação do singleton e atribuição no atributo.
const instance1 = Singleton.instance;
// Retorno da instância que foi anteriormente criada.
const instance2 = Singleton.instance;

console.log(instance1 === instance2); // true!
