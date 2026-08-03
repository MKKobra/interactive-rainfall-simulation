import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createOrbitControls(camera, renderer) {

    const controls = new OrbitControls(

        camera,

        renderer.domElement

    );

    // Smooth movement
    controls.enableDamping = true;

    controls.dampingFactor = 0.08;

    // Prevent camera from flipping underground
    controls.maxPolarAngle = Math.PI / 2.1;

    // Zoom limits
    controls.minDistance = 5;
    controls.maxDistance = 40;

    // Focus point
    controls.target.set(0, 0, 0);

    return controls;

}