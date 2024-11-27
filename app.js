let btn=document.querySelector(".btn");
let details=document.querySelector(".details");
let cityName=document.querySelector(".cityName");
let cityTemp=document.querySelector(".cityTemp");
let cityTime=document.querySelector(".cityTime");
let cityAtmos= document.querySelector(".cityAtmosphere");
let tempDeg1= document.querySelector(".tempDeg1");
let tempTime1=document.querySelector(".tempTime1");
let tempDeg2= document.querySelector(".tempDeg2");
let tempTime2=document.querySelector(".tempTime2");


 const locationSuccess=  async (position)=>{
    const {latitude , longitude} = position.coords;
    result = await weather(latitude,longitude);
    console.log(result);

    cityName.innerText = result.location.name;
    cityTemp.innerText = result.current.temp_c + " C";
    cityTime.innerText = result.location.localtime;
    cityAtmos.innerText = result.current.condition.text;


    clearText();


    for(i=0;i<12;i++){
         tempDeg1.innerText += ` ` + result.forecast.forecastday[0].hour[i].temp_c  + "C" + "," ;
         tempTime1.innerText +=  ` ` + `${i}:am` + ``;
        };

        for(i=12;i<24;i++){
            tempDeg2.innerText += ` ` + result.forecast.forecastday[0].hour[i].temp_c  + "C" + "," ;
            tempTime2.innerText +=  ` ` + `${i}:pm` + ``;
        };
     
};

const clearText= ()=>{
    tempDeg1.innerText = "";
    tempTime1.innerText = "";
    tempDeg2.innerText = "";
    tempTime2.innerText = "";
}

 const locationfailed= ()=>{
    details.innerText=`location request accept chey ra puka`
 };

btn.addEventListener("click", ()=>{
    navigator.geolocation.getCurrentPosition(locationSuccess,locationfailed);
    
});

const weather = async (lat,lon)=>{
    const promise =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=984fa21df7be48a78cb71810242711&q=${lat},${lon}&days=1&aqi=no&alerts=no`);
    console.log(promise);
    return await promise.json();
};




  