class Factory{
    constructor (location, owner){
    this.location = location
    this.owner = owner
    //default for a facory is 0 vehicles 
    this.vehicles = []
   }
  //create vehcile is not a function 
  createVehicle(vehicle){
    this.vehicles.push(vehicle)
  }
  //its paints the matching vehicle the specified color
  paintVehicle(vin, paintColor){
    //index of the vehicle with that vin
  let vIndex = this.vehicles.findIndex(v => v.vin === vin)
  this.vehicles[vIndex].paint(paintColor)
  }
  //when called lists all vehicles in factory 
  listVehicles(){
  return this.vehicles
  }
}