import Reservation from '../entities/Reservation.js'

export default class ReservationService {
  makeNewReservation(customer, numberOfGuests, date, hour, details = null ) {
    let reservation = new Reservation()
    reservation.customer = customer
    reservation.numberOfGuests = numberOfGuests
    reservation.date = date
    reservation.hour = hour
    if(!details) {
      reservation.details = "Fara detalii suplimentare"
    } else {
      reservation.details = details
    }

    return reservation;
  }
}
