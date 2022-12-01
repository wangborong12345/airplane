
import { _decorator, Component, Node } from 'cc';
import { Constant } from '../Constant';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EnemyMovement
 * DateTime = Thu Dec 01 2022 10:58:52 GMT+0800 (中国标准时间)
 * Author = yulee
 * FileBasename = EnemyMovement.ts
 * FileBasenameNoExtension = EnemyMovement
 * URL = db://assets/script/plane/EnemyMovement.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
const OUTRANGE = 50
@ccclass('EnemyMovement')
export class EnemyMovement extends Component {

    public speed: number = 0

    start() {
    }

    update(deltaTime: number) {
        const pos = this.node.position;
        const moveLength = pos.z + this.speed;
        this.node.setPosition(pos.x, pos.y, pos.z + this.speed)
        // 超出屏幕就销毁掉
        if (moveLength > OUTRANGE) {
            this.node.destroy()
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
