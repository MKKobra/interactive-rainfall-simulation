import * as THREE from "three";

export function createRoof() {

    const roof = new THREE.Group();

    //----------------------------------
    // Main Roof
    //----------------------------------

    const mainRoof = new THREE.Mesh(

        new THREE.ConeGeometry(

            3.3,   // wider than the house
            2.2,   // height
            4      // square roof

        ),

        new THREE.MeshStandardMaterial({

            color: 0x8b1e1e

        })

    );

    mainRoof.rotation.y = Math.PI / 4;

    mainRoof.castShadow = true;
    mainRoof.receiveShadow = true;

    roof.add(mainRoof);

    //----------------------------------
    // Roof Base (Thickness)
    //----------------------------------

    const base = new THREE.Mesh(

        new THREE.BoxGeometry(

            4.8,
            0.15,
            4.8

        ),

        new THREE.MeshStandardMaterial({

            color: 0x5a1a1a

        })

    );

    base.position.y = -1.05;

    base.castShadow = true;
    base.receiveShadow = true;

    roof.add(base);

    return roof;

}