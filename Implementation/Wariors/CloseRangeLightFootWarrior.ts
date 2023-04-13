import Shield from "../Weapons/SingleHanded/Shield";
import Saber from "../Weapons/TwoHanded/Saber";
import Spear from "../Weapons/TwoHanded/Spear";
import Sword from "../Weapons/SingleHanded/Sword";
import LightFootSoldier from "../../abstraction/Warrior/LightFootSoldier";
import LightArmor from "../../abstraction/Armor/LightArmor";


export default class CloseRangeLightFootWarrior extends LightFootSoldier {

    constructor(name: string, health: number, strength: number, armor: LightArmor
        , rightHand: Saber | Spear | Sword, leftHand: Shield | null = null){
        super(name, health, strength, armor, rightHand, leftHand);
    }
}