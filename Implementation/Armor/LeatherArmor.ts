import LightArmor from "../../abstraction/Armor/LightArmor";

class LeatherArmor extends LightArmor {
    constructor(durability: number) {
      super("Leather Armor", 20, durability);
    }
  
    public getWeight(): number {
      return 20;
    }
  
    public getStealthBonus(): number {
      return 5;
    }
  }