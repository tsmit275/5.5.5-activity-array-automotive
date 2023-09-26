class Vehicle {
    constructor(make, model, year, price, vin){
    this.make = make
    this.model = model
    this.year = year
    this. price = price
    this.vin = vin
    this.color = undefined 
    }
    drive(){
        return this.year + " "+ this.make + " " + this.model+ " "+ "drives"
     }
    paint(color){
    this.color = color
    
    }

}

