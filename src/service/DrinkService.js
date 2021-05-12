export default class DrinkService {
  calculatePriceOfDrinks (menu) {
    let totalPrice = 0;
    menu.items.forEach(function (item) {
      totalPrice += item.price
    })
    return  totalPrice;
  }
}