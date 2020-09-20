export default class Courier {
  constructor (courierName = Courier.DEFAULT_COURIER) {
    this._name = courierName
  }
}

Courier.DEFAULT_COURIER = "FanCourier"
