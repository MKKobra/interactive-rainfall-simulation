import * as THREE from "three";

export function createFoundation() {

    const geometry = new THREE.BoxGeometry(

        5,

        0.6,

        5

    );

    const material = new THREE.MeshStandardMaterial({

        color: 0x808080

    });

    const foundation = new THREE.Mesh(

        geometry,

        material

    );

    foundation.position.y = 0.3;

    foundation.castShadow = true;
    foundation.receiveShadow = true;

    return foundation;

}