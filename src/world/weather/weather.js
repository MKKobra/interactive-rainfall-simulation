import { CloudSystem } from "./clouds/cloudSystem.js";
import { RainSystem } from "./rain/rainSystem.js";
import { Wind } from "./wind/wind.js";
import { WeatherController } from "./controller/weatherController.js";

export class Weather {

    constructor(scene, camera, house) {

        //----------------------------------

        this.wind = new Wind();

        //----------------------------------

        this.cloudSystem =

            new CloudSystem(scene);

        //----------------------------------

        this.rainSystem =

            new RainSystem(

                scene,

                camera,

                this.wind,

                house

            );

        this.controller =

            new WeatherController(this);

    }

    //----------------------------------

    update(deltaTime) {

        this.wind.update(deltaTime);

        this.cloudSystem.update(deltaTime);

        this.rainSystem.update(deltaTime);

    }

}