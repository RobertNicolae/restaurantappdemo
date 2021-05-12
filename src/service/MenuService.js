import Dish from '../entities/Dish.js'
import Drink from '../entities/Drink.js'

export default class MenuService {
  calculateTotalPriceOfMenuItems (menu) {
    let total = 0
    menu.items.forEach(function (item) {
      total += item.price
    })

    return total
  }

  getListOfDishes (menu) {
    let dishes = []
    menu.items.forEach(function (item) {
      if (item instanceof Dish) {
        dishes.push(item)
      }
    })

    return dishes
  }

  getListOfDrinkType (menu, drinkType) {
    let foundDrinks = []
    menu.items.forEach((item) => {
      if (item instanceof Drink && item.type === drinkType) {
        foundDrinks.push(item)
      }
    })

    return foundDrinks
  }
}

