import Onion from "../Weapons/TwoHanded/Onion";
import LightFootSoldier from "../../abstraction/Warrior/LightFootSoldier";
import LightArmor from "../../abstraction/Armor/LightArmor";


export default class MediumRangeLightFootWarrior extends LightFootSoldier {

    constructor(name: string, health: number, strength: number, armor: LightArmor
        , rightHand: Onion){
        super(name, health, strength, armor, rightHand, null);
    }
}