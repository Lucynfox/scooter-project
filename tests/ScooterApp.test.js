const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterApp object', () => {
    const scooterAppObj = new ScooterApp()
    test('Manhattan key has empty array as value', () => {
      // edit this to be a real test!
      expect(scooterAppObj.stations["Manhattan"]).toEqual([]);
    }
  )
  })

  describe('scooter methods', () => {
    const scooterAppObj2 = new ScooterApp()
    const appUser = new User('username', 'password', 21)
// register user
test('register user', () => {
  scooterAppObj2.register(appUser)
    expect(scooterAppObj2.registeredUsers[appUser.username]).toBe('username')
})
// log in
test('log in', () => {
    loginOfscooterObj2 = scooterAppObj2.logIn('username', 'password')
    expect(scooterAppObj2['username'][loggedIn]).toBe(true)
})
// add scooter
// test('add scooter', () => {
//     expect(scooterObj2.addScooter(location, scooter)).toBe(10)
// })
// remove scooter
// test('remove scooter', () => {
//     expect(scooterObj2.RemoveScooter(scooterToRemove)).toBe(10)
// })
  })
  