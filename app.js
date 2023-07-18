const cityName = document.getElementById("city_name");
const SearchBtn = document.getElementById("Search");
const weather = (city) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff30bc39b032709faa16b3e0d888f8d1`)
        .then(res => res.json())
        .then(data => {
            let weatherData = (Math.round(data.main.temp - 273.15));
            document.getElementById('name').innerText = city.charAt(0).toUpperCase() + city.slice(1)
            document.getElementById('weather_result').innerText = weatherData + "°C";
            document.getElementById('Clouds').innerText = data.weather[0].main;
            if (data.weather[0].main === "Rain") {
                document.getElementById('img').src = "https://www.svgrepo.com/show/111622/rainy.svg"

                document.getElementById('img').style.height = "80px"
            }
            else if (data.weather[0].main === "Clouds") {
                document.getElementById('img').src = "https://www.svgrepo.com/show/138565/clouds.svg"

                document.getElementById('img').style.height = "80px"
            }
            else {
                document.getElementById('img').src = "https://openweathermap.org/img/wn/02d@2x.png"

                document.getElementById('img').style.height = "80px"
            }
            console.log(data.weather[0].main)
        })
}
SearchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    weather(cityName.value)
    cityName.value = '';
    console.log('object');
})