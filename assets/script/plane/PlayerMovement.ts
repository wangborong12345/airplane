
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Air
 * DateTime = Sun Nov 20 2022 16:00:18 GMT+0800 (中国标准时间)
 * Author = yulee
 * FileBasename = air.ts
 * FileBasenameNoExtension = air
 * URL = db://assets/script/air.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('PlayerMovement')
export class PlayerMovement extends Component {



    start() {
    }



    update(deltaTime: number) {
        
    }

    onDestroy() {
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
