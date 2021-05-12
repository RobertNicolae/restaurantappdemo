export default class Menu {
  /**
   * Restaurant menu constructor
   *
   * A menu should have a nice name,
   * a short description and a cool specific (italian dishes, French wines, etc)
   */
  constructor () {
    this._name = ''
    this._description = ''
    this._items = []
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

  get items () {
    return this._items
  }

  set items (value) {
    this._items = value
  }

  addItem (newItem) {
    this._items.push(newItem)
  }

  removeItem (itemToRemove) {
    let i = this._items.findIndex(itemToRemove)
    if (i !== -1) {
      this._items.remove(i)
    }
  }
}