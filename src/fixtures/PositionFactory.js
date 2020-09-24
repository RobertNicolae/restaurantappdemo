import Position from '../entities/Position.js'

export default class PositionFactory {
  getFirstType() {
    let firstType = new Position()
    firstType.type = 0
    return firstType;
  }
  getSecondType() {
    let secondType = new Position()
    secondType.type = 1
    return secondType;
  }
  getThirdType() {
    let thirdType = new Position()
    thirdType.type = 2
    return thirdType;
  }
  getFourthType() {
    let fourthType = new Position()
    fourthType.type = 3
    return fourthType;
  }
}

Position.TYPES = {
  dishWasher: 0,
  Chef: 1,
  miniChef: 2,
  supremeChef: 3
}

Position.TYPES_LABELS = {
  [Position.TYPES.firstType]: 'dishWasher',
  [Position.TYPES.secondType]: 'Chef',
  [Position.TYPES.thirdType]: 'miniChef',
  [Position.TYPES.fourthType]: 'supremeChef'

}