import TwoHandedWeapon from "../../../abstraction/Weapon/TwoHandedWeapon";

export default class Spear extends TwoHandedWeapon{
    constructor(damage: number, protection: number, attackDistance: number){
        super(damage, protection, attackDistance);
    }

    attack(): void{

    }
    block(): void{

    }
}