const User = require('../src/User')

// User tests here
describe('The user class', () => {
    const user1 = new User('username1', 'password123', 10)

// test username
test('has an username', () => {
    expect(user1.username).toBe('username1')
})

// test password
test('has an password', () => {
    expect(user1.password).toBe('password123')
})

// test age
test('has an age', () => {
    expect(user1.age).toBe(10)
})

})
