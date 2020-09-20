import Order from '../entities/Order.js'
import Courier from '../entities/Courier.js'

export default class OrderService {
  assignCourierToOrder(order, courier) {
    order.courier = courier
    order.status = Order.STATUSES.inProgress
  }

  assignEmployeeToOrder(order, employee) {
    order.employee = employee

  }
  makeNewOrder(items, customer, courier = null) {
    if(!courier) {
      courier = new Courier()
    }
    let order = new Order()
    order.status = Order.STATUSES.placed
    order.customer = customer
    order.courier = courier
    items.forEach((item) => order.addItem(item))

    return order;
  }
}

