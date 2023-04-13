import SingleHandedWeapon from "../../../abstraction/Weapon/SingleHandedWeapon";

export default class Morgenstern extends SingleHandedWeapon{
    constructor(damage: number, protection: number, attackDistance: number){
        super(damage, protection, attackDistance);
    }

    attack(): void{

    }
    block(): void{

    }
}