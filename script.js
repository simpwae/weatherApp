const apiKey = "6f0fb0f6f320f886633532d7f3147aca";
let city = prompt("Enter your current city::");
let tempre = document.querySelector(".temp");
let stat = document.querySelector(".status");
let feeLike = document.querySelector(".feel-like");
axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
  .then(function (response) {
    tempre.innerText = response.data.main.temp + "° C";
    stat.innerText = response.data.weather[0].description;
    feeLike.innerText =
      "Feels like " +
      response.data.main.feels_like +
      "°" +
      " with a wind Scale of " +
      response.data.wind.speed;

    console.log(response.data.main.temp);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
