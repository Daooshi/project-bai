<template>
<div>
    <h3>This is the weather for the next 5 days!</h3>
    <div class="wrapper">
        <p id="myWeather"></p>
    </div>
</div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "Weather",
        methods: {
            getWeather: function(){
                axios({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/523920/'
                }).then(function (response) {
                    // handle success
                    //console.log(response.data.consolidated_weather);
                    for(let i = 0; i < response.data.consolidated_weather.length; i++){
                        //console.log(response.data.consolidated_weather[i]);
                        let weatherString = 'Date: ' + response.data.consolidated_weather[i].applicable_date 
                                            + ' Min/Max Temperature: ' + Math.round(response.data.consolidated_weather[i].min_temp / 2) + '/' + Math.round(response.data.consolidated_weather[i].max_temp / 2) + ' °C'
                                            + ' Weather state: ' + response.data.consolidated_weather[i].weather_state_name;
                        let inputElement = document.getElementsByTagName("p")[i];
                        let pElement = document.createElement("p");
                        let textItem = document.createTextNode(weatherString);
                        pElement.appendChild(textItem);
                        inputElement.appendChild(pElement);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            }
        },
        mounted: function () {
            this.getWeather();
        }
    }
</script>

<style scoped>
.wrapper {
    display: grid;
    justify-content: center;
    grid-gap: 1rem;
}

p{
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 20px;
    text-align: left;
    position: relative;

}
h3 {
    padding: 1rem;
}
</style>