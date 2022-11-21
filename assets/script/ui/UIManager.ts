
import { _decorator, Component, Node, systemEvent, SystemEvent, EventTouch, sys } from 'cc';
import { GameManager } from '../framework/GameManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIManager
 * DateTime = Sun Nov 20 2022 16:35:10 GMT+0800 (中国标准时间)
 * Author = yulee
 * FileBasename = UIManager.ts
 * FileBasenameNoExtension = UIManager
 * URL = db://assets/script/ui/UIManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('UIManager')
export class UIManager extends Component {
    @property
    public planeSpeed = 1

    @property(Node)
    public playerNode: Node = null

    @property(GameManager)
    public gameManager: GameManager = null

    start() {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this)
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this._touchEnd, this)
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this)
    }



    update(deltaTime: number) {
        // [4]
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.TOUCH_START, this._touchStart, this)
        systemEvent.off(SystemEvent.EventType.TOUCH_END, this._touchEnd, this)
        systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this)
    }

    _touchMove(touch: Touch, event: EventTouch): void {
        const delta = event.getDelta()
        let x = this.playerNode.getPosition().x + delta.x * this.planeSpeed * 0.1
        let z = this.playerNode.getPosition().z - delta.y * this.planeSpeed * 0.1
        this.playerNode.setPosition(x, this.playerNode.getPosition().y, z)
    }

    _touchStart(touch: Touch, event: EventTouch): void {
        this.gameManager.isShooting(true)
    }

    _touchEnd(touch: Touch, event: EventTouch): void {
        this.gameManager.isShooting(false)
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
