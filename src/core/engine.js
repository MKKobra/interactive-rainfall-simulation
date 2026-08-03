import * as THREE from "three";

import { createScene } from "./scene.js";
import { createCamera } from "./camera.js";
import { createRenderer } from "./renderer.js";
import { setupResize } from "./resize.js";
import { addHelpers } from "./helpers.js";

import { createOrbitControls } from "../controls/orbitControls.js";

import { createGround } from "../world/terrain/ground.js";
import { setupLighting } from "../world/lighting/lighting.js";
import { createHouse } from "../world/house/house.js";
import { createForest } from "../world/vegetation/forest.js";

import { Weather } from "../world/weather/weather.js";

export function createEngine() {

    const scene = createScene();

    const camera = createCamera();

    const renderer = createRenderer();

    const controls = createOrbitControls(
        camera,
        renderer
    );

    setupLighting(scene);

    scene.add(createGround());

    const house = createHouse();
    scene.add(house);

    createForest(scene);

    const weather = new Weather(
    scene,
    camera,
    house 
    );

    addHelpers(scene);

    setupResize(
        camera,
        renderer
    );

    const clock = new THREE.Clock();

    function animate() {

        requestAnimationFrame(animate);

        const deltaTime = clock.getDelta();

        weather.update(deltaTime);

        controls.update();

        renderer.render(
            scene,
            camera
        );

    }

    animate();

}