import Armor from "./Armor";

export default abstract class LightArmor extends Armor {
    constructor(name: string, defense: number, durability: number) {
      super(name, defense, durability);
    }
  
    public abstract getStealthBonus(): number;
  }