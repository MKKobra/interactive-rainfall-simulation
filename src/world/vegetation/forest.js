import * as THREE from "three";

import { createTree } from "./tree.js";

export function createForest(scene) {

    const NUMBER_OF_TREES = 60;

    for (let i = 0; i < NUMBER_OF_TREES; i++) {

        const tree = createTree();

        let x;
        let z;

        //----------------------------------
        // Find a valid position
        //----------------------------------

        do {

            x = THREE.MathUtils.randFloatSpread(150);

            z = THREE.MathUtils.randFloatSpread(150);

        }

        while (

            Math.abs(x) < 12 &&

            Math.abs(z) < 12

        );

        //----------------------------------
        // Position
        //----------------------------------

        tree.position.set(

            x,

            0,

            z

        );

        //----------------------------------
        // Random Rotation
        //----------------------------------

        tree.rotation.y =

            Math.random() * Math.PI * 2;

        //----------------------------------
        // Random Scale
        //----------------------------------

        const scale =

            THREE.MathUtils.randFloat(

                0.7,

                1.6

            );

        tree.scale.set(

            scale,

            scale,

            scale

        );

        scene.add(tree);

    }

}