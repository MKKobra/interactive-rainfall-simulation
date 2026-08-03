import * as THREE from "three";

export function createDirectionalLight() {

    const light = new THREE.DirectionalLight(

        0xffffff,

        2.5

    );

    light.position.set(

        30,

        50,

        20

    );

    //----------------------------------
    // Shadows
    //----------------------------------

    light.castShadow = true;

    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    light.shadow.camera.left = -60;
    light.shadow.camera.right = 60;
    light.shadow.camera.top = 60;
    light.shadow.camera.bottom = -60;

    light.shadow.camera.near = 1;
    light.shadow.camera.far = 150;

    return light;

}