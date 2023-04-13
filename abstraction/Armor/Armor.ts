import IArmor from "../interface/IArmor";

export default abstract class Armor implements IArmor{
    protected name: string;
    protected defense: number;
    protected durability: number;
  
    constructor(name: string, defense: number, durability: number) {
      this.name = name;
      this.defense = defense;
      this.durability = durability;
    }
  
    public abstract getWeight(): number;
}