export default class Reservation {
  constructor () {
    this._customer = null
    this._numberOfGuests = 0
    this._date = new Date()
    this._hour = ""
    this._details = ""
    this._reservationNumber = Math.floor(Math.random() * 100001)
  }

  get customer () {
    return this._customer
  }

  set customer (value) {
    this._customer = value
  }

  get numberOfGuests () {
    return this._numberOfGuests
  }

  set numberOfGuests (value) {
    this._numberOfGuests = value
  }

  get date () {
    return this._date
  }

  set date (value) {
    this._date = value
  }

  get hour () {
    return this._hour
  }

  set hour (value) {
    this._hour = value
  }

  get details () {
    return this._details
  }

  set details (value) {
    this._details = value
  }

  get reservationNumber () {
    return this._reservationNumber
  }

}