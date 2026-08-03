import * as THREE from "three";

export function createWindow(x, y, z, rotationY = 0) {

    //----------------------------------
    // Window Group
    //----------------------------------

    const windowGroup = new THREE.Group();

    //----------------------------------
    // Frame
    //----------------------------------

    const frameGeometry = new THREE.BoxGeometry(
        1.1,
        1.1,
        0.1
    );

    const frameMaterial = new THREE.MeshStandardMaterial({
        color: 0x5c4033
    });

    const frame = new THREE.Mesh(
        frameGeometry,
        frameMaterial
    );

    frame.castShadow = true;
    frame.receiveShadow = true;

    //----------------------------------
    // Glass
    //----------------------------------

    const glassGeometry = new THREE.BoxGeometry(
        0.9,
        0.9,
        0.05
    );

    const glassMaterial = new THREE.MeshPhysicalMaterial({

        color: 0x9fdfff,

        transparent: true,

        opacity: 0.45,

        transmission: 0.8,

        roughness: 0.05

    });

    const glass = new THREE.Mesh(
        glassGeometry,
        glassMaterial
    );

    glass.position.z = 0.04;

    //----------------------------------

    windowGroup.add(frame);

    windowGroup.add(glass);

    //----------------------------------

    windowGroup.position.set(
        x,
        y,
        z
    );

    windowGroup.rotation.y = rotationY;

    return windowGroup;

}