import * as THREE from "three";

export function createAmbientLight() {

    const ambientLight = new THREE.AmbientLight(

        0xffffff,

        0.6

    );

    return ambientLight;

}