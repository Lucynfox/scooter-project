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
    expect(scooterObj2.price).toBe(true)
})

  //dock method
  test('dock method', () => {
    expect(scooterObj2.price).toBe(true)
})

  //requestRepair method
  test('requestRepair method', () => {
    expect(scooterObj2.price).toBe(true)
})
  //charge method
  test('charge method', () => {
    expect(scooterObj2.recharge()).toBe(true)
})
})
