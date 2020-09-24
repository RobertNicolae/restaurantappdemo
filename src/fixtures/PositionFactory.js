import Position from '../entities/Position.js'

export default class PositionFactory {
  getFirstType() {
    let firstType = new Position()
    firstType.type = "dishWasher"
    return firstType;
  }
  getSecondType() {
    let secondType = new Position()
    secondType.type = "miniChef"
    return secondType;
  }
  getThirdType() {
    let thirdType = new Position()
    thirdType.type = "Chef"
    return thirdType;
  }
  getFourthType() {
    let fourthType = new Position()
    fourthType.type = "supremeChef"
    return fourthType;
  }
}

