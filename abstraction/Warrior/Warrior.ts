import Armor from "../Armor/Armor";
import TwoHandedWeapon from "../Weapon/TwoHandedWeapon";
import Weapon from "../Weapon/Weapon";
import IAttack from "../interface/Warrior/IAttack";
import IDefend from "../interface/Warrior/IDefend";
import IMove from "../interface/Warrior/IMove";
import IRetreat from "../interface/Warrior/IRetreat";
import IWarrior from "../interface/Warrior/IWarrior";

export default abstract class Warrior implements IWarrior {
    protected name: string;
    protected health: number;
    protected strength: number;
    protected armor: Armor;
    protected rightHand: Weapon;
    protected leftHand: Weapon | null;

    constructor(name: string, health: number, strength: number, armor: Armor, rightHand: Weapon, leftHand: Weapon | null = null){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.armor = armor;
        this.rightHand = rightHand;
        this.leftHand = rightHand instanceof TwoHandedWeapon ? null : leftHand;
    }

    public move(action: IMove): void {
        action.do();
    }
    public attack(action: IAttack): void {
        action.do();
    }
    public defend(action: IDefend): void {
        action.do();
    }
    public retreat(action: IRetreat): void {
        action.do();
    }

    public getWeaponRightHand(): Weapon{
        return this.rightHand;
    }

    public getWeaponLeftHand(): Weapon | null{
        return this.leftHand;
    }
}