import{Payload} from './Payload'
import{Cargo} from './Cargo'

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: []
    astronauts: []
    constructor(name: string, totalCapacityKg: number, cargoItems: [], astronauts: []){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }


}