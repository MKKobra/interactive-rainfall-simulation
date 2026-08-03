export class Wind {

    constructor() {

        //----------------------------------
        // Current Wind
        //----------------------------------

        this.current = 5;

        //----------------------------------
        // Target Wind
        //----------------------------------

        this.target = 5;

        //----------------------------------
        // Timer
        //----------------------------------

        this.timer = 0;

    }

    //----------------------------------

    update(deltaTime) {

        this.timer += deltaTime;

        //----------------------------------
        // Every 5 seconds choose a new target
        //----------------------------------

        if (this.timer > 5) {

            this.timer = 0;

            this.target =

                Math.random() * 12 - 6;

        }

        //----------------------------------
        // Smooth interpolation
        //----------------------------------

        this.current +=

            (this.target - this.current)

            * deltaTime;

    }

}