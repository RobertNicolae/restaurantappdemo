import Drink from '../entities/Drink.js'
import Ingredient from '../entities/Ingredient.js'

export default class DrinkFactory {
  /**
   * Return a green apple drink settings
   * @returns {Drink}
   */
  getGreenAppleDrink() {
    let GreenApple = new Drink()
    GreenApple.name = "Green apple"
    GreenApple.price = 20
    GreenApple.type = Drink.TYPES.non_alcoholic
    GreenApple.addIngredient()

    return GreenApple;
  }

  /**
   * Return a mojito drink settings
   * @returns {Drink}
   */
  getMojitoDrink() {
    let Mojito = new Drink()
    Mojito.name = "Mojito"
    Mojito.price = 24
    Mojito.addIngredient((new Ingredient()).name = "Lime")
    Mojito.type = Drink.TYPES.alcoholic

    return Mojito;
  }
}