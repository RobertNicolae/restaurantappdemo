import MenuItem from './MenuItem.js'

export default class Drink extends MenuItem {

}
Drink.TYPES = {
  alcoholic: 0,
  non_alcoholic: 1,
  Coffee: 2
}

Drink.TYPES_LABELS = {
  [Drink.TYPES.alcoholic]: 'Bautura alcoolica',
  [Drink.TYPES.non_alcoholic]: 'Non-Alcoolic',
  [Drink.TYPES.Coffee]: 'Cafea'
}