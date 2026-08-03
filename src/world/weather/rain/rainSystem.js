import * as THREE from "three";

export class RainSystem {

    constructor(scene, camera, wind, house) {
        this.maxDrops = 5000;
        // Current visible drops
        this.count = 2000;
        this.camera = camera;
        this.wind = wind;
        this.intensity = 5;

        this.camera = camera;

        this.wind = wind;
        this.house = house;

        // Rain intensity (controlled by keyboard)
        this.intensity = 5;

        //----------------------------------
        // Per-drop data
        //----------------------------------

        this.speeds = [];
        this.lengths = [];

        //----------------------------------
        // Geometry
        //----------------------------------

        const positions = [];

        for (let i = 0; i < this.maxDrops; i++) {

            const x =
                this.camera.position.x +
                THREE.MathUtils.randFloat(-20, 20);

            const y =
                THREE.MathUtils.randFloat(0, 35);

            const z =
                this.camera.position.z +
                THREE.MathUtils.randFloat(-20, 20);

            //----------------------------------
            // Random Properties
            //----------------------------------

            const speed =
                THREE.MathUtils.randFloat(18, 45);

            const length =
                THREE.MathUtils.randFloat(0.8, 1.8);

            this.speeds.push(speed);
            this.lengths.push(length);

            //----------------------------------
            // Wind Tilt
            //----------------------------------

            const tilt = this.wind.current * 0.08;

            //----------------------------------
            // Top Vertex
            //----------------------------------

            positions.push(
                x,
                y,
                z
            );

            //----------------------------------
            // Bottom Vertex
            //----------------------------------

            positions.push(
                x - tilt,
                y - length,
                z
            );

        }

        //----------------------------------
        // Buffer Geometry
        //----------------------------------

        this.geometry = new THREE.BufferGeometry();

        this.geometry.setAttribute(

            "position",

            new THREE.Float32BufferAttribute(

                positions,

                3

            )

        );

        //----------------------------------
        // Initial Draw Range
        //----------------------------------
        
        this.geometry.setDrawRange(
            0,
            this.count * 2
        );
        //----------------------------------
        // Material
        //----------------------------------

        this.material = new THREE.LineBasicMaterial({

            color: 0xe5f7ff,

            transparent: true,

            opacity: 0.8

        });

        //----------------------------------
        // Mesh
        //----------------------------------

        this.rain = new THREE.LineSegments(

            this.geometry,

            this.material

        );

        scene.add(this.rain);
        // Roof Bounding Box
        this.roofBox = new THREE.Box3();
        this.roofBox.setFromObject(
            this.house.userData.roof
        );

        //----------------------------------
        // Position Array
        //----------------------------------

        this.positions =
            this.geometry.attributes.position.array;

    }

    //----------------------------------
    // Update
    //----------------------------------

    update(deltaTime) {
        this.roofBox.setFromObject(
        this.house.userData.roof);

        let drop = 0;
        //----------------------------------
        // Adjust count based on intensity
        
        this.count = Math.floor(
            THREE.MathUtils.mapLinear(
            this.intensity, 1, 10, 400,this.maxDrops)

);

this.geometry.setDrawRange(

    0,

    this.count * 2

);

        for (

    let i = 0;

    i < this.count * 6;

    i += 6

) {

            //----------------------------------
            // Properties
            //----------------------------------

            const speed =
                this.speeds[drop] *
                (this.intensity / 5);

            const length =
                this.lengths[drop];

            const wind =
                this.wind.current;

            //----------------------------------
            // Top Vertex
            //----------------------------------

            this.positions[i] +=
                wind * deltaTime;

            this.positions[i + 1] -=
                speed * deltaTime;

            //----------------------------------
            // Bottom Vertex
            //----------------------------------

            this.positions[i + 3] =
                this.positions[i] - wind * 0.08;

            this.positions[i + 4] =
                this.positions[i + 1] - length;

            this.positions[i + 5] =
                this.positions[i + 2];

            //----------------------------------
            // Respawn
            //----------------------------------

            if (this.positions[i + 1] < 0) {
                //----------------------------------
// Roof Collision
//----------------------------------

const point = new THREE.Vector3(

    this.positions[i],

    this.positions[i + 1],

    this.positions[i + 2]

);

if (

    this.roofBox.containsPoint(point)

) {

    this.positions[i + 1] = -1;

}
                const x =
                    this.camera.position.x +
                    THREE.MathUtils.randFloat(-20, 20);

                const y =
                    THREE.MathUtils.randFloat(30, 40);

                const z =
                    this.camera.position.z +
                    THREE.MathUtils.randFloat(-20, 20);

                this.positions[i] = x;
                this.positions[i + 1] = y;
                this.positions[i + 2] = z;

                this.positions[i + 3] =
                    x - wind * 0.08;

                this.positions[i + 4] =
                    y - length;

                this.positions[i + 5] =
                    z;

            }

            drop++;

        }

        this.geometry.attributes.position.needsUpdate = true;

    }

}