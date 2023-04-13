import LightArmor from "../../abstraction/Armor/LightArmor";

class ClothArmor extends LightArmor {
    constructor(durability: number) {
      super("Cloth Armor", 15, durability);
    }
  
    public getWeight(): number {
      return 10;
    }
  
    public getStealthBonus(): number {
      return 10;
    }
  }