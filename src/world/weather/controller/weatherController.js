export class WeatherController {

    constructor(weather) {

        this.weather = weather;

        window.addEventListener(

            "keydown",

            (event) => {

                switch (event.key) {

                    //----------------------------------
                    // Wind Right
                    //----------------------------------

                    case "ArrowRight":

                        this.weather.wind.current -= 1;

                        break;

                    //----------------------------------
                    // Wind Left
                    //----------------------------------

                    case "ArrowLeft":

                        this.weather.wind.current += 1;

                        break;

                    //----------------------------------
                    // Increase Rain
                    //----------------------------------

                    case "ArrowUp":

                        this.weather.rainSystem.intensity += 1;

                        break;

                    //----------------------------------
                    // Decrease Rain
                    //----------------------------------

                    case "ArrowDown":

                        this.weather.rainSystem.intensity -= 1;

                        break;

                }

                //----------------------------------
                // Clamp values
                //----------------------------------

                this.weather.wind.current = Math.max(

                    -10,

                    Math.min(

                        10,

                        this.weather.wind.current

                    )

                );

                this.weather.rainSystem.intensity = Math.max(

                    1,

                    Math.min(

                        10,

                        this.weather.rainSystem.intensity

                    )

                );

                console.clear();

                console.log(

                    "Wind :", this.weather.wind.current

                );

                console.log(

                    "Rain Intensity :", this.weather.rainSystem.intensity

                );

            }

        );

    }

}