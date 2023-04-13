import Armor from "./Armor";

export default abstract class MediumArmor extends Armor {
    constructor(name: string, defense: number, durability: number) {
      super(name, defense, durability);
    }
  
    public abstract getAgilityBonus(): number;
  }