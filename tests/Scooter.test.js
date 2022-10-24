const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  const objUser = new User('username', 'password', 21)
  const scooterObj1 = new Scooter('Manhattan', objUser)
  test('does something', () => {
    // edit this to be a real test!
    expect(scooterObj1.station).toEqual('Manhattan');
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooterObj2 = new Scooter('Manhattan',new User('username', 'password', 21))

  //rent method
  test('rent method', () => {
    scooterObj2.charge = 21
    scooterObj2.rent()
    expect(scooterObj2.isBroken).toBe(false)
})

  //dock method
  test('dock method', () => {
    scooterObj2.dock('Bronx')
    expect(scooterObj2.docked).toBe(true)
})

  //requestRepair method
test('requestRepair method', async () => {
  scooterObj2.isBroken = true
  await scooterObj2.requestRepair()
  expect(scooterObj2.isBroken === false).toEqual(true)
})
  //charge method
test("recharge method", async () => {
  scooterObj2.charge = 20
  await scooterObj2.recharge()
  expect(scooterObj2.charge).toBe(100)
})
})
