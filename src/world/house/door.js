import * as THREE from "three";

export function createDoor() {

    //----------------------------------
    // Geometry
    //----------------------------------

    const geometry = new THREE.BoxGeometry(

        1,

        2,

        0.12

    );

    //----------------------------------
    // Material
    //----------------------------------

    const material = new THREE.MeshStandardMaterial({

        color: 0x5c4033

    });

    //----------------------------------
    // Mesh
    //----------------------------------

    const door = new THREE.Mesh(

        geometry,

        material

    );

    //----------------------------------
    // Position
    //----------------------------------

    door.position.set(

        0,

        1,

        2.06

    );

    //----------------------------------

    door.castShadow = true;

    door.receiveShadow = true;

    return door;

}