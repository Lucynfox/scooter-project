const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  scooterSessions = []
  constructor(){
    scooterSessions.push(this)

    stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [], 
      StatenIsland: []
    }
    registeredUsers = {}
  }
  // static scooterSessions = []if ('key' in myObj)
  register(user){
    if (user.username in registeredUsers) {
      console.log('already registered!')
    }
    else if (user.age < 18){
      console.log('too young to register!')
    } else {
      registeredUsers.push(user.username = {
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0
      })
      console.log('user has been registered')
    }
  }

  logIn(username, password){
    if (!(username in registeredUsers) || password !== registeredUsers[username][password]){
      throw new Error('Username or password is incorrect.')
    } else {
      registeredUsers[username][loggedIn] = true
      console.log('user has successfully logged in.')
    }
  }

  addScooter(location, scooter){
    if (location === undefined || scooter === undefined){
      throw new Error('requires location and scooter input')
    } else {
      scooter[station] = location
      this.stations.push(scooter)
    }
  }

  RemoveScooter(scooterToRemove){
    scooterSerialNumber = scooterToRemove.serial
    console.log('scooter has successfully been removed')
  }
}

module.exports = ScooterApp
