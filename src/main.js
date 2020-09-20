import Menu from './entities/Menu.js'
import Dish from './entities/Dish.js'
import MenuService from './service/MenuService.js'
import Drink from './entities/Drink.js'
import DrinkService from './service/DrinkService.js'
import Ingredient from './entities/Ingredient.js'
import DrinkFactory from './fixtures/DrinkFactory.js'
import DrinkView from './views/DrinkView.js'
import Order from './entities/Order.js'
import OrderService from './service/OrderService.js'
import Courier from './entities/Courier.js'
import Customer from './entities/Customer.js'
import ReservationService from './service/ReservationService.js'
import Reservation from './entities/Reservation.js'
import Employee from './entities/Employee.js'
import EmployeeView from './views/EmployeeView.js'

let shawrmaMenu = new Menu()
let drinksMenu = new Menu()

shawrmaMenu.name = 'Meniu de shaorma'
shawrmaMenu.description = 'Meniu pentru cocalari'
drinksMenu.name = 'Meniu pentru bauturi'
drinksMenu.description = 'Aloolice si Non-Alcoolice'

let dish = new Dish()

dish.name = 'pui'
dish.description = 'pui expirat de la soculuifm'
dish.price = 12

shawrmaMenu.addItem(dish)

const serviceOfMenu = new MenuService()
const serviceofDrink = new DrinkService()
const drinkFactory = new DrinkFactory()
const drinkView = new DrinkView()
const orderService = new OrderService()
const reservationService = new ReservationService()
const employeeView = new EmployeeView()

drinksMenu.addItem(drinkFactory.getMojitoDrink())
drinksMenu.addItem(drinkFactory.getGreenAppleDrink())

let totalMenuPrice = serviceOfMenu.calculateTotalPriceOfMenuItems(shawrmaMenu)
let totalDrinkPrice = serviceofDrink.calculatePriceOfDrinks(drinksMenu)

let alcoholicDrinks = serviceOfMenu.getListOfDrinkType(drinksMenu, Drink.TYPES.alcoholic)
alcoholicDrinks.forEach((drink) => console.log(drinkView.showDrinkText(drink)))
let customer = new Customer()
customer.email = "dasiknldsa"
customer.name = "alialifdli"
let order = orderService.makeNewOrder(shawrmaMenu.items.concat(drinksMenu.items), customer)

let tommorrow = new Date()
tommorrow.setDate(tommorrow.getDate() + 1)
let newReservation = reservationService.makeNewReservation(customer, 3, tommorrow, "20:00" )

let employee = new Employee()
employee.name = "Robert"
employee.position = "bucatar"
let assignEmployee = orderService.assignEmployeeToOrder(order, employee)
console.log(employeeView.showEmployeeText(employee))
console.log(order)