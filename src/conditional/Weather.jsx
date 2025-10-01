const Weather = ({ temp }) => {
  let message;

  if (temp > 30) {
    message = "It's hot outside! 🌞";
  } else if (temp < 15) {
    message = "It's cold outside! ❄️";
  } else {
    message = "The weather is mild. 🌤️";
  }

  return (
    <div>
      <h4>Weather is {temp}°C</h4>
      <h5>{message}</h5>
    </div>
  );
};

const WeatherCheck = () => {
  const currentTemp = 34; 
  return (
    <div>
      <Weather temp={currentTemp} />
    </div>
  );
};

export default WeatherCheck;
