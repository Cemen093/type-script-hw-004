import LightArmor from "../Armor/LightArmor";
import Weapon from "../Weapon/Weapon";
import FootWarrior from "./FootWarrior";

export default abstract class LightFootSoldier extends FootWarrior {

    constructor(name: string, health: number, strength: number, armor: LightArmor
        , rightHand: Weapon, leftHand: Weapon | null = null){
        super(name, health, strength, armor, rightHand, leftHand);
    }
}