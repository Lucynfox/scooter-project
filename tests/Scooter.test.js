const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  const scooterObj1 = new Scooter('Manhattan',User('username', 'password', 21))
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooterObj2 = new Scooter('Manhattan',User('username', 'password', 21))

  //rent method
  test('rent method', () => {
    scooterObj2.charge = 21
    expect(scooterObj2.rent()).toBe('Enjoy the ride!')
})

  //dock method
  test('dock method', () => {
    scooterObj2.dock(station)
    expect(scooterObj2.user).toBe("")
})

  //requestRepair method
  test('requestRepair method', () => {
    expect(scooterObj2.requestRepair()).toBe(true)
})
  //charge method
  test('charge method', () => {
    scooterObj2.recharge()
    expect(scooterObj2.charge).toBe(100)
})
})
