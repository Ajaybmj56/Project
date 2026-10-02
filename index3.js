  const celsiusEI =document.getElementById("celsius")
  const fahrenheitEI =document.getElementById("fahrenheit")
  const kelvinEI =document.getElementById("kelvin")


  function computerTemp(event){
      const currentValue = +event.target.value;

      switch(event.target.name){
          case"celsius":
            kelvinEI.value=(currentValue +273.15).toFixed(2);
            fahrenheitEI.value=(currentValue*1.8 + 32).toFixed(2);
          break;

          case"fahrenheit":
            celsiusEI.value=((currentValue -32)/1.8).toFixed(2);
            kelvinEI.value=((currentValue-32 )/1.8 + 273.15).toFixed(2);
          break;

          case"kelvin":
            celsiusEI.value=(currentValue -273.15).toFixed(2);
            fahrenheitEI.value=((currentValue-273.15) * 1.8 + 32).toFixed(2);
          break;
          default:
          break;
      }
  }