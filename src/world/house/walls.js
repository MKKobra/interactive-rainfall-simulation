import * as THREE from "three";

export function createWalls() {

    //----------------------------------
    // Geometry
    //----------------------------------

    const geometry = new THREE.BoxGeometry(
        4,
        3,
        4
    );

    //----------------------------------
    // Material
    //----------------------------------

    const material = new THREE.MeshStandardMaterial({
        color: 0xd8c3a5
    });

    //----------------------------------
    // Mesh
    //----------------------------------

    const walls = new THREE.Mesh(
        geometry,
        material
    );

    // IMPORTANT:
    // Do NOT position the walls here.
    // house.js will decide where they belong.

    walls.castShadow = true;
    walls.receiveShadow = true;

    return walls;

}