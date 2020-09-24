export default class Employee {
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