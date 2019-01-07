
import Starling from "starling/core/Starling";
import Sprite from "starling/display/Sprite";
import AssetManager from "starling-framework/lib/starling/utils/AssetManager";
import App from "./app";

export default class NewGame extends Sprite {

    constructor() {
        super();

        var fire = App.resources.getBulletFire();
        fire.x = 100;
        fire.y = 100;
        fire.scale = 10;
        this.addChild(fire);
        console.log("start12");
    }
}
