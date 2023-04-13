import HeavyArmor from "../../abstraction/Armor/HeavyArmor";

class SteelArmor extends HeavyArmor {
    constructor(durability: number) {
      super("Steel Armor", 30, durability);
    }
  
    public getWeight(): number {
      return 50;
    }
  
    public getSwordResistance(): number {
      return 10;
    }
  }