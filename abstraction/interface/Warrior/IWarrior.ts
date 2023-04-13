import IAttack from "./IAttack";
import IDefend from "./IDefend";
import IMove from "./IMove";
import IRetreat from "./IRetreat";

export default interface IWarrior {
    move(action: IMove):void;
    attack(action: IAttack):void;
    defend(action: IDefend):void;
    retreat(action: IRetreat):void;
}