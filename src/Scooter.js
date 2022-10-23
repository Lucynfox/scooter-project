class Scooter{
  // scooter code here
  constructor(station, user){
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random() * 1000 + 1)
    this.charge = Math.floor(Math.random() * 100 + 1)
    this.isBroken = false
    this.docked = true
  }

  rent(){
    if (isBroken == false && charge > 20){
      this.docked == false
      console.log('Enjoy the ride!”')
    } else if (charge <= 20){
      throw new Error('Scooter low on battery, please charge.')
    } else {
      throw new Error('Scooter is broken, please send a repair request.')
    }
  }

  dock(station){
    if(station === undefined) {
      throw new Error('Docking station required!');
    } else {
      this.station = station
    }
    this.docked == true
    this.user ==  ""

  }

  recharge(){
    this.charge = 100
  }

  requestRepair(){
    setInterval(function () {console.log("Repair has been complete")}, 1000);
    this.isBroken = false
  }
}


module.exports = Scooter
