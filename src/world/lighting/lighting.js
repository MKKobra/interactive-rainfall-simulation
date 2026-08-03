import { createAmbientLight } from "./ambientLight.js";
import { createDirectionalLight } from "./directionalLight.js";

export function setupLighting(scene) {

    const ambientLight = createAmbientLight();

    const directionalLight = createDirectionalLight();

    scene.add(ambientLight);

    scene.add(directionalLight);

    return {

        ambientLight,

        directionalLight

    };

}