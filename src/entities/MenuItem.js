export default class MenuItem {
  constructor () {
    this._name = ''
    this._description = ''
    this._price = 0
    this._type = 0
    this._ingredients = []
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get description () {
    return this._description
  }

  set description (value) {
    this._description = value
  }

  get price () {
    return this._price
  }

  set price (value) {
    this._price = value
  }

  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  get ingredients () {
    return this._ingredients
  }

  set ingredients (value) {
    this._ingredients = value
  }

  addIngredient (newIngredient) {
    this._ingredients.push(newIngredient)
  }

  removeIngredient (ingredient) {
    let i = this.ingredients.findIndex(ingredient)
    if (i !== -1) {
      this.ingredients.remove(i)
    }
  }
}