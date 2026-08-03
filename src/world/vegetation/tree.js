import * as THREE from "three";

export function createTree() {

    const tree = new THREE.Group();

    //----------------------------------
    // Trunk
    //----------------------------------

    const trunk = new THREE.Mesh(

        new THREE.CylinderGeometry(

            0.22,
            0.28,
            2,
            10

        ),

        new THREE.MeshStandardMaterial({

            color: 0x6b4423

        })

    );

    trunk.position.y = 1;

    trunk.castShadow = true;
    trunk.receiveShadow = true;

    tree.add(trunk);

    //----------------------------------
    // Leaves
    //----------------------------------

    const leaves = new THREE.Mesh(

        new THREE.ConeGeometry(

            1.1,
            2.5,
            10

        ),

        new THREE.MeshStandardMaterial({

            color: 0x2e8b57

        })

    );

    leaves.position.y = 3;

    leaves.castShadow = true;

    tree.add(leaves);

    return tree;

}