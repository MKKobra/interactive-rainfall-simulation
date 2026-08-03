import * as THREE from "three";

export function createCloud() {

    //----------------------------------
    // Cloud Group
    //----------------------------------

    const cloud = new THREE.Group();

    //----------------------------------
    // Material
    //----------------------------------

    const material = new THREE.MeshStandardMaterial({

        color: 0xd9d9d9,

        roughness: 1,

        metalness: 0

    });

    //----------------------------------
    // Number of cloud pieces
    //----------------------------------

    const pieces = 8;

    for (let i = 0; i < pieces; i++) {

        //----------------------------------
        // Random sphere
        //----------------------------------

        const radius = THREE.MathUtils.randFloat(

            1.2,

            2.2

        );

        const sphere = new THREE.Mesh(

            new THREE.SphereGeometry(

                radius,

                24,

                24

            ),

            material

        );

        //----------------------------------
        // Random Position
        //----------------------------------

        sphere.position.set(

            THREE.MathUtils.randFloat(-3, 3),

            THREE.MathUtils.randFloat(-0.3, 0.8),

            THREE.MathUtils.randFloat(-1.8, 1.8)

        );

        sphere.castShadow = true;

        cloud.add(sphere);

    }

    return cloud;

}