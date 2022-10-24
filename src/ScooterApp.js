const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  static scooterSessions = []

  constructor(){
    // scooterSessions.push(this)

    this.stations = {
      'Manhattan': [],
      'Brooklyn': [],
      'Queens': [],
      'Bronx': [], 
      'StatenIsland': []
    }
    this.registeredUsers = {}
  }
  // static scooterSessions = []if ('key' in myObj)
  register(user){
    if (user.username in this.registeredUsers) {
      console.log('already registered!')
    }
    else if (user.age < 18){
      console.log('too young to register!')
    } else {
      this.registeredUsers.push({
        username: user.username,
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0
      })
      console.log('user has been registered')
    }
  }

  logIn(username, password){
    if (!(username in this.registeredUsers) || password !== registeredUsers[username][password]){
      throw 'Username or password is incorrect.'
    } else {
      this.registeredUsers[username][loggedIn] = true
      console.log('user has successfully logged in.')
    }
  }

  addScooter(location, scooter){
    if (location === undefined || scooter === undefined){
      throw new Error('requires location and scooter input')
    } else {
      scooter[station] = location
      this.stations[location].push(scooter)
    }
  }

  RemoveScooter(scooterToRemove){
    const scooterSerialNumber = scooterToRemove.serial
    const scooterLocation = scooterToRemove.Station
    console.log('scooter has successfully been removed')
  }
}

module.exports = ScooterApp
