import HeavyArmor from "../../abstraction/Armor/HeavyArmor";

class PlateArmor extends HeavyArmor {
    constructor(durability: number) {
      super("Plate Armor", 35, durability);
    }
  
    public getWeight(): number {
      return 60;
    }
  
    public getSwordResistance(): number {
      return 20;
    }
  }