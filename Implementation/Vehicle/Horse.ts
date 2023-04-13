import Vehicle from "../../abstraction/Vehicle";

export default class Horse extends Vehicle{
    constructor(name: string, speed: number){
        super(name, speed);
    }
}