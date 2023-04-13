import Armor from "../Armor/Armor";
import Weapon from "../Weapon/Weapon";
import Warrior from "./Warrior";

export default abstract class FootWarrior extends Warrior {

    constructor(name: string, health: number, strength: number, armor: Armor
        , rightHand: Weapon, leftHand: Weapon | null = null){
        super(name, health, strength, armor, rightHand, leftHand);
        this.armor = armor;
    }

    public getArmor(): Armor {
        return this.armor;
    }
}