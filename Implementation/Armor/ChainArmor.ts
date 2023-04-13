import MediumArmor from "../../abstraction/Armor/MediumArmor";

class ChainArmor extends MediumArmor {
    constructor(durability: number) {
      super("Chain Armor", 25, durability);
    }
  
    public getWeight(): number {
      return 40;
    }
  
    public getAgilityBonus(): number {
      return 2;
    }
  }