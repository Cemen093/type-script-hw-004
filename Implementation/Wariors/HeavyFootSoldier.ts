import HeavyArmor from "../../abstraction/Armor/HeavyArmor";
import FootWarrior from "../../abstraction/Warrior/FootWarrior";
import Weapon from "../../abstraction/Weapon/Weapon";
import Halberd from "../Weapons/TwoHanded/Halberd";
import TwoHandedSword from "../Weapons/TwoHanded/TwoHandedSword";
import Morgenstern from "../Weapons/SingleHanded/Morgenstern";
import Shield from "../Weapons/SingleHanded/Shield";
import Axe from "../Weapons/TwoHanded/Axe"


export default class HeavyFootSoldier extends FootWarrior {

    constructor(name: string, health: number, strength: number, armor: HeavyArmor
        , rightHand: Halberd | TwoHandedSword | Morgenstern | Axe, leftHand: Shield | null = null){
        super(name, health, strength, armor, rightHand, leftHand);
    }
}