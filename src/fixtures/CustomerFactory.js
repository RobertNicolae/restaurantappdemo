import Customer from '../entities/Customer.js'

export default class CustomerFactory {

  getFirstCustomer() {
    let firstCustomer = new Customer()
    firstCustomer.name = "Ionica vasile"
    firstCustomer.email = "ionicavasile@yahoo.com"
    firstCustomer.phone = "07254836950"
    return firstCustomer;
  }
  getSecondCustomer() {
    let secondCustomer = new Customer()
    secondCustomer.name = "Mihai vasile"
    secondCustomer.email = "Mihaivasile@yahoo.com"
    secondCustomer.phone = "072542836950"
    return secondCustomer;
  }
  getThirdCustomer() {
    let thirdCustomer = new Customer()
    thirdCustomer.name = "George vasile"
    thirdCustomer.email = "georgevasile@yahoo.com"
    thirdCustomer.phone = "072545665836950"
    return thirdCustomer;
  }
  getFourthCustomer() {
    let fourthCustomer = new Customer()
    fourthCustomer.name = "radu vasile"
    fourthCustomer.email = "raduavasile@yahoo.com"
    fourthCustomer.phone = "072548345566950"
    return fourthCustomer;
  }

}