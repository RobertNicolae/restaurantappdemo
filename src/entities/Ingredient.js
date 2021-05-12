export default class ingredient {
  constructor () {
    this._name = ""
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }
}
