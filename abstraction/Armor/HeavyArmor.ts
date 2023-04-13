import Armor from "./Armor";

export default abstract class HeavyArmor extends Armor {
    constructor(name: string, defense: number, durability: number) {
      super(name, defense, durability);
    }
  
    public abstract getSwordResistance(): number;
  }