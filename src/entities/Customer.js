export default class Customer {
  constructor () {
    this._name = ""
    this._email = ""
    this._phone = ""
    this._address = null
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get email () {
    return this._email
  }

  set email (value) {
    this._email = value
  }

  get phone () {
    return this._phone
  }

  set phone (value) {
    this._phone = value
  }
}