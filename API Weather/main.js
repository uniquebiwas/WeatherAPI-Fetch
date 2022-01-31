var button = document.querySelector('.button')
var CityName1 = document.querySelector('.CityName')

button.addEventListener('click', function () {

// api request and serching part for weather to show the weather of any city 
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+CityName1.value+'&appid=c8f7b805243cd8de19a2b0397192fd57')

        .then(response => response.json())        
        
         .then(data => 

            { 
                //here is the console checking code
                console.log(data.main.temp)
                console.log(data.main.pressure)
                console.log(data.main.humidity)
                console.log(data.name)
                console.log(data.weather[0].description)
                console.log(data.wind.speed)
                console.log(data.wind.deg)

                const celcius = Math.round(data.main.temp-273);
                
      
         
        // variable assigned and call for display
         var display= `
        
         <h2 > City Name = ${data.name},${data.sys.country} </h2>
         <p >Main Weather Condition = ${data.weather[0].description}<p>
         <p > Temperature = ${celcius} °C</p>
         <p> Pressure = ${data.main.pressure} hpa</p>
         <p> Humidity = ${data.main.humidity}%</p>
         
         <p > Wind Speed  = ${data.wind.speed} m/s </p>
         <p> Direction = ${data.wind.deg}°</p>
         
         `
         // main code for display
         document.getElementById("display").innerHTML = display;
         
         
        })
        //  console.log(data.main.temp)
        .catch(err => alert("Wrong City Name..!!"))
        // wrong city name error showing part 
        // console.log(CityName.value)
}
)
//api request for weather to display
fetch('https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=c8f7b805243cd8de19a2b0397192fd57')
.then(response => response.json())
        
.then(data => 

   { 
       //here the console check code
       console.log(data.main.temp)
       console.log(data.main.pressure)
       console.log(data.main.humidity)
       console.log(data.name)
       console.log(data.weather[0].description)
       console.log(data.wind.speed)
       console.log(data.wind.deg)

       const celcius = Math.round(data.main.temp-273);
       

//variable for calling to display the result
var display= `


<h2 > City Name = ${data.name},${data.sys.country} </h2>
<h4 >Main Weather Condition = ${data.weather[0].description}</h4>
<p > Temperature = ${celcius}°C</p>
<p> Pressure = ${data.main.pressure} hpa</p>
<p> Humidity = ${data.main.humidity}%</p>

<p > Wind Speed  = ${data.wind.speed} m/s </p>
<p> Direction = ${data.wind.deg}°</p>

`
  // main code for display
document.getElementById("display").innerHTML = display;


})
//  console.log(data.main.temp)
.catch(err => alert("Wrong City Name..!!"))
// console.log(CityName.value)
