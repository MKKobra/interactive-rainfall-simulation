import * as THREE from "three";

import { createCloud } from "./cloud.js";

export class CloudSystem {

    constructor(scene) {

        this.scene = scene;

        this.clouds = [];

        this.createClouds();

    }

    //----------------------------------
    // Create Clouds
    //----------------------------------

    createClouds() {

        const NUMBER_OF_CLOUDS = 30;

        for (let i = 0; i < NUMBER_OF_CLOUDS; i++) {

            const cloud = createCloud();

            //----------------------------------
            // Random Position
            //----------------------------------

            cloud.position.set(

                THREE.MathUtils.randFloatSpread(180),

                THREE.MathUtils.randFloat(20, 30),

                THREE.MathUtils.randFloatSpread(180)

            );

            //----------------------------------
            // Random Scale
            //----------------------------------

            const scale = THREE.MathUtils.randFloat(

                0.8,

                2.5

            );

            cloud.scale.set(

                scale,

                scale,

                scale

            );

            //----------------------------------
            // Random Rotation
            //----------------------------------

            cloud.rotation.y =

                Math.random() * Math.PI * 2;

            //----------------------------------

            this.scene.add(cloud);

            this.clouds.push(cloud);

        }

    }

    //----------------------------------
    // Update
    //----------------------------------

    update(deltaTime) {

        for (const cloud of this.clouds) {

            cloud.position.x += 0.4 * deltaTime;

            //----------------------------------
            // Wrap Around
            //----------------------------------

            if (cloud.position.x > 90) {

                cloud.position.x = -90;

            }

        }

    }

}