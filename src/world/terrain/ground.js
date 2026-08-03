import * as THREE from "three";

export function createGround() {

    //----------------------------------
    // Load Grass Texture
    //----------------------------------

    const textureLoader = new THREE.TextureLoader();

    const grassTexture = textureLoader.load(
        "./assets/textures/grass.jpg"
    );

    //----------------------------------
    // Repeat Texture
    //----------------------------------

    grassTexture.wrapS = THREE.RepeatWrapping;
    grassTexture.wrapT = THREE.RepeatWrapping;

    grassTexture.repeat.set(50, 50);

    //----------------------------------
    // Geometry
    //----------------------------------

    const geometry = new THREE.PlaneGeometry(

        200,

        200

    );

    //----------------------------------
    // Material
    //----------------------------------

    const material = new THREE.MeshStandardMaterial({

        map: grassTexture

    });

    //----------------------------------
    // Mesh
    //----------------------------------

    const ground = new THREE.Mesh(

        geometry,

        material

    );

    ground.rotation.x = -Math.PI / 2;

    ground.receiveShadow = true;

    return ground;

}