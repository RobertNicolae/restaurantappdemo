export default class Position {
  constructor () {
    this._type = ""
  }

  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }
}