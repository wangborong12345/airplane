
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BoundlessBackground
 * DateTime = Sun Nov 20 2022 14:54:53 GMT+0800 (中国标准时间)
 * Author = yulee
 * FileBasename = BoundlessBackground.ts
 * FileBasenameNoExtension = BoundlessBackground
 * URL = db://assets/script/BoundlessBackground.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('BoundlessBackground')
export class BoundlessBackground extends Component {

    @property(Node)
    backgroundPanel01: Node
    @property(Node)
    backgroundPanel02: Node
    @property
    moveSpeed: number = 0

    private _moveRange = 100
    start() {
        this.backgroundPanel01.setPosition(0, 0, 0)
        this.backgroundPanel02.setPosition(0, 0, -this._moveRange)
    }

    update(deltaTime: number) {
        this._moveBackground(deltaTime)
    }

    private _moveBackground(delateTime: number) {
        this.backgroundPanel01.setPosition(0, 0, this.backgroundPanel01.getPosition().z + this.moveSpeed * delateTime)
        this.backgroundPanel02.setPosition(0, 0, this.backgroundPanel02.getPosition().z + this.moveSpeed * delateTime)

        if (this.backgroundPanel01.getPosition().z > this._moveRange) {
            this.backgroundPanel01.setPosition(0, 0, this.backgroundPanel02.getPosition().z - this._moveRange)
        }

        if (this.backgroundPanel02.getPosition().z > this._moveRange) {
            this.backgroundPanel02.setPosition(0, 0, this.backgroundPanel01.getPosition().z - this._moveRange)
        }
    }

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
