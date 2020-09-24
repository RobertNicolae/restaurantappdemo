import Employee from '../entities/Employee.js'

export default class EmployeeFactory {
  getFirstEmployee() {
    let firstEmployee = new Employee()
    firstEmployee.name = "Andy nebunu"
    return firstEmployee;
  }
  getSecondEmployee() {
    let secondEmployee = new Employee()
    secondEmployee.name = "Mihaiescu Dan"
    return secondEmployee;
  }
  getThirdEmployee() {
    let thirdEmployee = new Employee()
    thirdEmployee.name = "Stroe alex"
    return thirdEmployee;
  }
  getFourthEmployee() {
    let fourthEmployee = new Employee()
    fourthEmployee.name = "Groasa Dan"
    return fourthEmployee;
  }
}