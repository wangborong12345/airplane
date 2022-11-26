
import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { Bullet } from '../bullet/Bullet';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameManager
 * DateTime = Mon Nov 21 2022 09:42:49 GMT+0800 (中国标准时间)
 * Author = yulee
 * FileBasename = GameManager.ts
 * FileBasenameNoExtension = GameManager
 * URL = db://assets/script/framework/GameManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('GameManager')
export class GameManager extends Component {

    // 玩家飞机
    @property(Node)
    public playerPlane: Node = null


    /**
     * 以下为子弹类型
     */
    @property(Prefab)
    public bullet01: Prefab = null

    @property(Prefab)
    public bullet02: Prefab = null

    @property(Prefab)
    public bullet03: Prefab = null


    @property(Prefab)
    public bullet04: Prefab = null

    @property(Prefab)
    public bullet05: Prefab = null

    // 子弹移动速度
    @property
    public bulletSpeed: number = 1

    // 子弹移动周期
    @property
    public shootTime: number = 0.3


    // 子弹管理节点
    @property(Node)
    private bulletRoot: Node = null

    private _currentShootTime: number = 0

    private _isShooting: boolean = false
    start() {
        this._init()
    }
    private _init() {
        this._currentShootTime = this.shootTime
    }

    update(deltaTime: number) {
        this._currentShootTime += deltaTime
        if (this._isShooting && this._currentShootTime > this.shootTime) {
            // 当触摸屏幕，并且当前射击时间大于射击周期，则可以发射一枚子弹
            this.createPlayerBullet()
            this._currentShootTime = 0
        }
    }

    public createPlayerBullet() {
        const bullet = instantiate(this.bullet01)
        bullet.setParent(this.bulletRoot)
        const pos = this.playerPlane.position
        bullet.setPosition(pos.x, pos.y, pos.z + (-17))
        const bulletComponent = bullet.getComponent(Bullet)
        // 设置子弹飞行速度
        bulletComponent.bulletSpeed = this.bulletSpeed
    }



    public isShooting(value: boolean) {
        this._isShooting = value
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
