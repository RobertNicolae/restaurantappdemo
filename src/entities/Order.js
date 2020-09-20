export default class Order {
  constructor () {
    this._items = []
    this._price = 0
    this._status = null
    this._courier = null
    this._customer = null
    this._employee = null
  }

  get items () {
    return this._items
  }

  set items (value) {
    this._items = value
  }

  get price () {
    return this._price
  }

  addItem (newItem) {
    this._items.push(newItem)
    this._price += newItem.price
  }

  removeItem (itemToRemove) {
    let i = this._items.findIndex(itemToRemove)
    if (i !== -1) {
      this._price -= this._items[i].price
      this._items.remove(i)
    }
  }

  get status () {
    return this._status
  }

  set status (value) {
    this._status = value
  }

  get courier () {
    return this._courier
  }

  set courier (value) {
    this._courier = value
  }

  get customer () {
    return this._customer
  }

  set customer (value) {
    this._customer = value
  }

  get employee () {
    return this._employee
  }

  set employee (value) {
    this._employee = value
  }
}

Order.STATUSES = {
  placed: 0,
  inProgress: 1,
  canceled: 2,
  done: 3
}

Order.STATUSES_LABELS = {
  [Order.STATUSES.placed]: 'Comanda plasata',
  [Order.STATUSES.inProgress]: 'Comanda se prepara',
  [Order.STATUSES.canceled]: 'Comanda a fost cancelata',
  [Order.STATUSES.done]: 'Comanda este gata'
}

