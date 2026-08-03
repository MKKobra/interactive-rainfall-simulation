import * as THREE from "three";

import { createFoundation } from "./foundation.js";
import { createWalls } from "./walls.js";
import { createRoof } from "./roof.js";
import { createDoor } from "./door.js";
import { createWindow } from "./window.js";
import { createSteps } from "./steps.js";

export function createHouse() {

    const house = new THREE.Group();

    //----------------------------------
    // Foundation
    //----------------------------------

    const foundation = createFoundation();
    house.add(foundation);

    //----------------------------------
    // Walls
    //----------------------------------

    const walls = createWalls();

    // Foundation height (0.6) + half wall height (1.5)
    walls.position.y = 2.1;

    house.add(walls);

    //----------------------------------
    // Roof
    //----------------------------------

    const roof = createRoof();

    // Top of walls = 3.6
    // Roof group's center is slightly lower
    roof.position.y = 4.7;

    house.add(roof);
    house.userData.roof = roof;

    //----------------------------------
    // Door
    //----------------------------------

    const door = createDoor();

    // Door height = 2
    // Bottom should sit on foundation
    door.position.set(0, 1.6, 2.06);

    house.add(door);

    //----------------------------------
    // Front Windows
    //----------------------------------

    house.add(createWindow(
        -1.25,
        2.8,
        2.06
    ));

    house.add(createWindow(
        1.25,
        2.8,
        2.06
    ));

    //----------------------------------
    // Left Window
    //----------------------------------

    house.add(createWindow(
        -2.06,
        2.8,
        0,
        Math.PI / 2
    ));

    //----------------------------------
    // Right Window
    //----------------------------------

    house.add(createWindow(
        2.06,
        2.8,
        0,
        Math.PI / 2
    ));

    //----------------------------------
    // Steps
    //----------------------------------

    house.add(createSteps());

    return house;

}