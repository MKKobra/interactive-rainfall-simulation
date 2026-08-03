import * as THREE from "three";

export function createSteps() {

    const steps = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({

        color: 0x777777

    });

    //------------------------------------
    // Step 1
    //------------------------------------

    const step1 = new THREE.Mesh(

        new THREE.BoxGeometry(
            1.8,
            0.2,
            0.6
        ),

        material

    );

    step1.position.set(

        0,

        0.1,

        2.8

    );

    //------------------------------------
    // Step 2
    //------------------------------------

    const step2 = new THREE.Mesh(

        new THREE.BoxGeometry(
            1.4,
            0.2,
            0.5
        ),

        material

    );

    step2.position.set(

        0,

        0.3,

        2.55

    );

    //------------------------------------

    step1.castShadow = true;
    step1.receiveShadow = true;

    step2.castShadow = true;
    step2.receiveShadow = true;

    steps.add(step1);
    steps.add(step2);

    return steps;

}