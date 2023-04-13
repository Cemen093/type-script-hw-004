import Onion from "../Weapons/TwoHanded/Onion";
import Warrior from "../../abstraction/Warrior/Warrior";
import Horse from "../Vehicle/Horse";
import Sword from "../Weapons/SingleHanded/Sword";
import Peak from "../Weapons/TwoHanded/Peak";
import MediumArmor from "../../abstraction/Armor/MediumArmor";
import HeavyArmor from "../../abstraction/Armor/HeavyArmor";


export default class MountedWarrior extends Warrior {
    protected vehicle: Horse;
    
    constructor(name: string, health: number, strength: number, armor: MediumArmor | HeavyArmor, vehicle: Horse
        , rightHand: Onion | Peak | Sword){
        super(name, health, strength, armor, rightHand, null);
        this.vehicle = vehicle;
    }
}