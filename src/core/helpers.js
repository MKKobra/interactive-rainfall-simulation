import * as THREE from "three";

export function addHelpers(scene) {

    scene.add(

        new THREE.GridHelper(

            100,

            100

        )

    );

    scene.add(

        new THREE.AxesHelper(

            5

        )

    );

}