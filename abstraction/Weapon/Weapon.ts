import IWeapon from "../interface/IWeapon";

export default abstract class Weapon implements IWeapon{
    protected damage:number;
    protected protection:number;
    protected attackDistance: number;
    //durability:number;
    //weight:number;
    
    constructor(damage: number, protection: number, attackDistance: number){
        this.damage = damage;
        this.protection = protection;
        this.attackDistance = attackDistance;
    }

    abstract attack(): void;
    abstract block(): void;
}