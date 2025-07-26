function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey='4b203619bac52a0555db17bf40bcefa1';
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>{
            const weatherInfo=document.getElementById('weatherInfo');
            weatherInfo.innerHTML=`<h2> weather in ${data.name}</h2>
            <p>Température : ${data.main.temp} &#8451;</p>
            <p>weather:${data.weather[0].description}</p>`;
        })   
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Échec de la récupération de la météo. Veuillez réessayer.</p>`;
          });
     }
     document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );