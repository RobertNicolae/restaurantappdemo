import Drink from '../entities/Drink.js'

export default class DrinkView {
  showDrinkText(drink) {
    return "Bautura mea, numita " + drink.name + " cu pretul de " + drink.price + " RON, este de tip " +
      Drink.TYPES_LABELS[drink.type]
  }
}