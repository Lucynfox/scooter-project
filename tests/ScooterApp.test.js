const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooter object', () => {
    const scooterObj = new ScooterApp()
    test('does something', () => {
      // edit this to be a real test!
      expect(scooterObj).toEqual(true);
    }
  )
  })

  describe('scooter methods', () => {
    const scooterObj2 = new ScooterApp()
// register user
test('register user', () => {
    expect(typeof scooterObj2.register(user)).toBe('class')
})
// log in
test('log in', () => {
    loginOfscooterObj2 = scooterObj2.logIn('username', 'password')
    expect(loginOfscooterObj2).toBe(true)
})
// add scooter
test('add scooter', () => {
    expect(scooterObj2.addScooter(location, scooter)).toBe(10)
})
// remove scooter
test('remove scooter', () => {
    expect(scooterObj2.RemoveScooter(scooterToRemove)).toBe(10)
})
  })