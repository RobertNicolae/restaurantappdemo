export default class Employee {
  constructor () {
    this._name = ""
    this._position = ""
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get position () {
    return this._position
  }

  set position (value) {
    this._position = value
  }
}